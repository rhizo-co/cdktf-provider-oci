# `devopsRepositorySetting` Submodule <a name="`devopsRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepositorySetting <a name="DevopsRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting oci_devops_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySetting(scope Construct, id *string, config DevopsRepositorySettingConfig) DevopsRepositorySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig">DevopsRepositorySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig">DevopsRepositorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks">PutMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings">PutMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeChecks">ResetMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeSettings">ResetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules"></a>

```go
func PutApprovalRules(value DevopsRepositorySettingApprovalRules)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---

##### `PutMergeChecks` <a name="PutMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks"></a>

```go
func PutMergeChecks(value DevopsRepositorySettingMergeChecks)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---

##### `PutMergeSettings` <a name="PutMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings"></a>

```go
func PutMergeSettings(value DevopsRepositorySettingMergeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts"></a>

```go
func PutTimeouts(value DevopsRepositorySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetApprovalRules"></a>

```go
func ResetApprovalRules()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetId"></a>

```go
func ResetId()
```

##### `ResetMergeChecks` <a name="ResetMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeChecks"></a>

```go
func ResetMergeChecks()
```

##### `ResetMergeSettings` <a name="ResetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeSettings"></a>

```go
func ResetMergeSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.DevopsRepositorySetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.DevopsRepositorySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.DevopsRepositorySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.DevopsRepositorySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsRepositorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference">DevopsRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecks">MergeChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference">DevopsRepositorySettingMergeChecksOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference">DevopsRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference">DevopsRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecksInput">MergeChecksInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettingsInput">MergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRules"></a>

```go
func ApprovalRules() DevopsRepositorySettingApprovalRulesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference">DevopsRepositorySettingApprovalRulesOutputReference</a>

---

##### `MergeChecks`<sup>Required</sup> <a name="MergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecks"></a>

```go
func MergeChecks() DevopsRepositorySettingMergeChecksOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference">DevopsRepositorySettingMergeChecksOutputReference</a>

---

##### `MergeSettings`<sup>Required</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettings"></a>

```go
func MergeSettings() DevopsRepositorySettingMergeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference">DevopsRepositorySettingMergeSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeouts"></a>

```go
func Timeouts() DevopsRepositorySettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference">DevopsRepositorySettingTimeoutsOutputReference</a>

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRulesInput"></a>

```go
func ApprovalRulesInput() DevopsRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MergeChecksInput`<sup>Optional</sup> <a name="MergeChecksInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecksInput"></a>

```go
func MergeChecksInput() DevopsRepositorySettingMergeChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---

##### `MergeSettingsInput`<sup>Optional</sup> <a name="MergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettingsInput"></a>

```go
func MergeSettingsInput() DevopsRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositorySettingApprovalRules <a name="DevopsRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingApprovalRules {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#items DevopsRepositorySetting#items}

---

### DevopsRepositorySettingApprovalRulesItems <a name="DevopsRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingApprovalRulesItems {
	MinApprovalsCount: *f64,
	Name: *string,
	DestinationBranch: *string,
	Reviewers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#min_approvals_count DevopsRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#name DevopsRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.destinationBranch">DestinationBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#destination_branch DevopsRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.reviewers">Reviewers</a></code> | <code>interface{}</code> | reviewers block. |

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```go
MinApprovalsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#min_approvals_count DevopsRepositorySetting#min_approvals_count}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#name DevopsRepositorySetting#name}.

---

##### `DestinationBranch`<sup>Optional</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```go
DestinationBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#destination_branch DevopsRepositorySetting#destination_branch}.

---

##### `Reviewers`<sup>Optional</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.reviewers"></a>

```go
Reviewers interface{}
```

- *Type:* interface{}

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#reviewers DevopsRepositorySetting#reviewers}

---

### DevopsRepositorySettingApprovalRulesItemsReviewers <a name="DevopsRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingApprovalRulesItemsReviewers {
	PrincipalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#principal_id DevopsRepositorySetting#principal_id}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#principal_id DevopsRepositorySetting#principal_id}.

---

### DevopsRepositorySettingConfig <a name="DevopsRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RepositoryId: *string,
	ApprovalRules: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules,
	Id: *string,
	MergeChecks: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks,
	MergeSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#repository_id DevopsRepositorySetting#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#id DevopsRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeChecks">MergeChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | merge_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#repository_id DevopsRepositorySetting#repository_id}.

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.approvalRules"></a>

```go
ApprovalRules DevopsRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#approval_rules DevopsRepositorySetting#approval_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#id DevopsRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MergeChecks`<sup>Optional</sup> <a name="MergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeChecks"></a>

```go
MergeChecks DevopsRepositorySettingMergeChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

merge_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#merge_checks DevopsRepositorySetting#merge_checks}

---

##### `MergeSettings`<sup>Optional</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeSettings"></a>

```go
MergeSettings DevopsRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#merge_settings DevopsRepositorySetting#merge_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.timeouts"></a>

```go
Timeouts DevopsRepositorySettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#timeouts DevopsRepositorySetting#timeouts}

---

### DevopsRepositorySettingMergeChecks <a name="DevopsRepositorySettingMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingMergeChecks {
	LastBuildSucceeded: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.property.lastBuildSucceeded">LastBuildSucceeded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#last_build_succeeded DevopsRepositorySetting#last_build_succeeded}. |

---

##### `LastBuildSucceeded`<sup>Required</sup> <a name="LastBuildSucceeded" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.property.lastBuildSucceeded"></a>

```go
LastBuildSucceeded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#last_build_succeeded DevopsRepositorySetting#last_build_succeeded}.

---

### DevopsRepositorySettingMergeSettings <a name="DevopsRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingMergeSettings {
	AllowedMergeStrategies: *[]*string,
	DefaultMergeStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#allowed_merge_strategies DevopsRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#default_merge_strategy DevopsRepositorySetting#default_merge_strategy}. |

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```go
AllowedMergeStrategies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#allowed_merge_strategies DevopsRepositorySetting#allowed_merge_strategies}.

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```go
DefaultMergeStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#default_merge_strategy DevopsRepositorySetting#default_merge_strategy}.

---

### DevopsRepositorySettingTimeouts <a name="DevopsRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

&devopsrepositorysetting.DevopsRepositorySettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#create DevopsRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#delete DevopsRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#update DevopsRepositorySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#create DevopsRepositorySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#delete DevopsRepositorySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#update DevopsRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositorySettingApprovalRulesItemsList <a name="DevopsRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingApprovalRulesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsRepositorySettingApprovalRulesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get"></a>

```go
func Get(index *f64) DevopsRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingApprovalRulesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsRepositorySettingApprovalRulesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers">PutReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">ResetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">ResetReviewers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReviewers` <a name="PutReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```go
func PutReviewers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationBranch` <a name="ResetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```go
func ResetDestinationBranch()
```

##### `ResetReviewers` <a name="ResetReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```go
func ResetReviewers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">Reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList">DevopsRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">DestinationBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">MinApprovalsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">ReviewersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">DestinationBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Reviewers`<sup>Required</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```go
func Reviewers() DevopsRepositorySettingApprovalRulesItemsReviewersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList">DevopsRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `DestinationBranchInput`<sup>Optional</sup> <a name="DestinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```go
func DestinationBranchInput() *string
```

- *Type:* *string

---

##### `MinApprovalsCountInput`<sup>Optional</sup> <a name="MinApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```go
func MinApprovalsCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReviewersInput`<sup>Optional</sup> <a name="ReviewersInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```go
func ReviewersInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationBranch`<sup>Required</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```go
func DestinationBranch() *string
```

- *Type:* *string

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```go
func MinApprovalsCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingApprovalRulesItemsReviewersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsRepositorySettingApprovalRulesItemsReviewersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```go
func Get(index *f64) DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">PrincipalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `PrincipalState`<sup>Required</sup> <a name="PrincipalState" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```go
func PrincipalState() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsRepositorySettingApprovalRulesOutputReference <a name="DevopsRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingApprovalRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsRepositorySettingApprovalRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList">DevopsRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.items"></a>

```go
func Items() DevopsRepositorySettingApprovalRulesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList">DevopsRepositorySettingApprovalRulesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---


### DevopsRepositorySettingMergeChecksOutputReference <a name="DevopsRepositorySettingMergeChecksOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingMergeChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsRepositorySettingMergeChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceededInput">LastBuildSucceededInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded">LastBuildSucceeded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastBuildSucceededInput`<sup>Optional</sup> <a name="LastBuildSucceededInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceededInput"></a>

```go
func LastBuildSucceededInput() *string
```

- *Type:* *string

---

##### `LastBuildSucceeded`<sup>Required</sup> <a name="LastBuildSucceeded" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded"></a>

```go
func LastBuildSucceeded() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsRepositorySettingMergeChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---


### DevopsRepositorySettingMergeSettingsOutputReference <a name="DevopsRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingMergeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsRepositorySettingMergeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">AllowedMergeStrategiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">DefaultMergeStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMergeStrategiesInput`<sup>Optional</sup> <a name="AllowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```go
func AllowedMergeStrategiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMergeStrategyInput`<sup>Optional</sup> <a name="DefaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```go
func DefaultMergeStrategyInput() *string
```

- *Type:* *string

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```go
func AllowedMergeStrategies() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```go
func DefaultMergeStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---


### DevopsRepositorySettingTimeoutsOutputReference <a name="DevopsRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositorysetting"

devopsrepositorysetting.NewDevopsRepositorySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsRepositorySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



