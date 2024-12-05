# `devopsProjectRepositorySetting` Submodule <a name="`devopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsProjectRepositorySetting <a name="DevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySetting(scope Construct, id *string, config DevopsProjectRepositorySettingConfig) DevopsProjectRepositorySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings">PutMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings">ResetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules"></a>

```go
func PutApprovalRules(value DevopsProjectRepositorySettingApprovalRules)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `PutMergeSettings` <a name="PutMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings"></a>

```go
func PutMergeSettings(value DevopsProjectRepositorySettingMergeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts"></a>

```go
func PutTimeouts(value DevopsProjectRepositorySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules"></a>

```go
func ResetApprovalRules()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId"></a>

```go
func ResetId()
```

##### `ResetMergeSettings` <a name="ResetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings"></a>

```go
func ResetMergeSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.DevopsProjectRepositorySetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.DevopsProjectRepositorySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.DevopsProjectRepositorySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.DevopsProjectRepositorySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsProjectRepositorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput">MergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules"></a>

```go
func ApprovalRules() DevopsProjectRepositorySettingApprovalRulesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a>

---

##### `MergeSettings`<sup>Required</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings"></a>

```go
func MergeSettings() DevopsProjectRepositorySettingMergeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts"></a>

```go
func Timeouts() DevopsProjectRepositorySettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a>

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput"></a>

```go
func ApprovalRulesInput() DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MergeSettingsInput`<sup>Optional</sup> <a name="MergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput"></a>

```go
func MergeSettingsInput() DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsProjectRepositorySettingApprovalRules <a name="DevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingApprovalRules {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

### DevopsProjectRepositorySettingApprovalRulesItems <a name="DevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingApprovalRulesItems {
	MinApprovalsCount: *f64,
	Name: *string,
	DestinationBranch: *string,
	Reviewers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch">DestinationBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers">Reviewers</a></code> | <code>interface{}</code> | reviewers block. |

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```go
MinApprovalsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}.

---

##### `DestinationBranch`<sup>Optional</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```go
DestinationBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}.

---

##### `Reviewers`<sup>Optional</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers"></a>

```go
Reviewers interface{}
```

- *Type:* interface{}

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}

---

### DevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers {
	PrincipalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}.

---

### DevopsProjectRepositorySettingConfig <a name="DevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	ApprovalRules: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules,
	Id: *string,
	MergeSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules"></a>

```go
ApprovalRules DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MergeSettings`<sup>Optional</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings"></a>

```go
MergeSettings DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts"></a>

```go
Timeouts DevopsProjectRepositorySettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

### DevopsProjectRepositorySettingMergeSettings <a name="DevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingMergeSettings {
	AllowedMergeStrategies: *[]*string,
	DefaultMergeStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}. |

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```go
AllowedMergeStrategies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```go
DefaultMergeStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

### DevopsProjectRepositorySettingTimeouts <a name="DevopsProjectRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

&devopsprojectrepositorysetting.DevopsProjectRepositorySettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsProjectRepositorySettingApprovalRulesItemsList <a name="DevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingApprovalRulesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsProjectRepositorySettingApprovalRulesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```go
func Get(index *f64) DevopsProjectRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingApprovalRulesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsProjectRepositorySettingApprovalRulesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers">PutReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">ResetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">ResetReviewers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReviewers` <a name="PutReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```go
func PutReviewers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationBranch` <a name="ResetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```go
func ResetDestinationBranch()
```

##### `ResetReviewers` <a name="ResetReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```go
func ResetReviewers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">Reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">DestinationBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">MinApprovalsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">ReviewersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">DestinationBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Reviewers`<sup>Required</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```go
func Reviewers() DevopsProjectRepositorySettingApprovalRulesItemsReviewersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `DestinationBranchInput`<sup>Optional</sup> <a name="DestinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```go
func DestinationBranchInput() *string
```

- *Type:* *string

---

##### `MinApprovalsCountInput`<sup>Optional</sup> <a name="MinApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```go
func MinApprovalsCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReviewersInput`<sup>Optional</sup> <a name="ReviewersInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```go
func ReviewersInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationBranch`<sup>Required</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```go
func DestinationBranch() *string
```

- *Type:* *string

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```go
func MinApprovalsCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingApprovalRulesItemsReviewersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsProjectRepositorySettingApprovalRulesItemsReviewersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```go
func Get(index *f64) DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">PrincipalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `PrincipalState`<sup>Required</sup> <a name="PrincipalState" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```go
func PrincipalState() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingApprovalRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsProjectRepositorySettingApprovalRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```go
func Items() DevopsProjectRepositorySettingApprovalRulesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---


### DevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingMergeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsProjectRepositorySettingMergeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">AllowedMergeStrategiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">DefaultMergeStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMergeStrategiesInput`<sup>Optional</sup> <a name="AllowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```go
func AllowedMergeStrategiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMergeStrategyInput`<sup>Optional</sup> <a name="DefaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```go
func DefaultMergeStrategyInput() *string
```

- *Type:* *string

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```go
func AllowedMergeStrategies() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```go
func DefaultMergeStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---


### DevopsProjectRepositorySettingTimeoutsOutputReference <a name="DevopsProjectRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsprojectrepositorysetting"

devopsprojectrepositorysetting.NewDevopsProjectRepositorySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsProjectRepositorySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



