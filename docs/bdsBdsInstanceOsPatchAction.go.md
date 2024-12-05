# `bdsBdsInstanceOsPatchAction` Submodule <a name="`bdsBdsInstanceOsPatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOsPatchAction <a name="BdsBdsInstanceOsPatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.NewBdsBdsInstanceOsPatchAction(scope Construct, id *string, config BdsBdsInstanceOsPatchActionConfig) BdsBdsInstanceOsPatchAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig">BdsBdsInstanceOsPatchActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig">BdsBdsInstanceOsPatchActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs">PutPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs">ResetPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPatchingConfigs` <a name="PutPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs"></a>

```go
func PutPatchingConfigs(value BdsBdsInstanceOsPatchActionPatchingConfigs)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts"></a>

```go
func PutTimeouts(value BdsBdsInstanceOsPatchActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId"></a>

```go
func ResetId()
```

##### `ResetPatchingConfigs` <a name="ResetPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs"></a>

```go
func ResetPatchingConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BdsBdsInstanceOsPatchAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BdsBdsInstanceOsPatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOsPatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs">PatchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput">OsPatchVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput">PatchingConfigsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion">OsPatchVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PatchingConfigs`<sup>Required</sup> <a name="PatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs"></a>

```go
func PatchingConfigs() BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts"></a>

```go
func Timeouts() BdsBdsInstanceOsPatchActionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput"></a>

```go
func ClusterAdminPasswordInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OsPatchVersionInput`<sup>Optional</sup> <a name="OsPatchVersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput"></a>

```go
func OsPatchVersionInput() *string
```

- *Type:* *string

---

##### `PatchingConfigsInput`<sup>Optional</sup> <a name="PatchingConfigsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput"></a>

```go
func PatchingConfigsInput() BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion"></a>

```go
func OsPatchVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOsPatchActionConfig <a name="BdsBdsInstanceOsPatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

&bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ClusterAdminPassword: *string,
	OsPatchVersion: *string,
	Id: *string,
	PatchingConfigs: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion">OsPatchVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs">PatchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword"></a>

```go
ClusterAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion"></a>

```go
OsPatchVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PatchingConfigs`<sup>Optional</sup> <a name="PatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs"></a>

```go
PatchingConfigs BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts"></a>

```go
Timeouts BdsBdsInstanceOsPatchActionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

### BdsBdsInstanceOsPatchActionPatchingConfigs <a name="BdsBdsInstanceOsPatchActionPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

&bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchActionPatchingConfigs {
	PatchingConfigStrategy: *string,
	BatchSize: *f64,
	ToleranceThresholdPerBatch: *f64,
	ToleranceThresholdPerDomain: *f64,
	WaitTimeBetweenBatchInSeconds: *f64,
	WaitTimeBetweenDomainInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch">ToleranceThresholdPerBatch</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain">ToleranceThresholdPerDomain</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}. |

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy"></a>

```go
PatchingConfigStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}.

---

##### `ToleranceThresholdPerBatch`<sup>Optional</sup> <a name="ToleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch"></a>

```go
ToleranceThresholdPerBatch *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}.

---

##### `ToleranceThresholdPerDomain`<sup>Optional</sup> <a name="ToleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain"></a>

```go
ToleranceThresholdPerDomain *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}.

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds"></a>

```go
WaitTimeBetweenBatchInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}.

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds"></a>

```go
WaitTimeBetweenDomainInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstanceOsPatchActionTimeouts <a name="BdsBdsInstanceOsPatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

&bdsbdsinstanceospatchaction.BdsBdsInstanceOsPatchActionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference <a name="BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.NewBdsBdsInstanceOsPatchActionPatchingConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch">ResetToleranceThresholdPerBatch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain">ResetToleranceThresholdPerDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds">ResetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds">ResetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetToleranceThresholdPerBatch` <a name="ResetToleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch"></a>

```go
func ResetToleranceThresholdPerBatch()
```

##### `ResetToleranceThresholdPerDomain` <a name="ResetToleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain"></a>

```go
func ResetToleranceThresholdPerDomain()
```

##### `ResetWaitTimeBetweenBatchInSeconds` <a name="ResetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```go
func ResetWaitTimeBetweenBatchInSeconds()
```

##### `ResetWaitTimeBetweenDomainInSeconds` <a name="ResetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```go
func ResetWaitTimeBetweenDomainInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput">PatchingConfigStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput">ToleranceThresholdPerBatchInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput">ToleranceThresholdPerDomainInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput">WaitTimeBetweenBatchInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput">WaitTimeBetweenDomainInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch">ToleranceThresholdPerBatch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain">ToleranceThresholdPerDomain</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `PatchingConfigStrategyInput`<sup>Optional</sup> <a name="PatchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput"></a>

```go
func PatchingConfigStrategyInput() *string
```

- *Type:* *string

---

##### `ToleranceThresholdPerBatchInput`<sup>Optional</sup> <a name="ToleranceThresholdPerBatchInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput"></a>

```go
func ToleranceThresholdPerBatchInput() *f64
```

- *Type:* *f64

---

##### `ToleranceThresholdPerDomainInput`<sup>Optional</sup> <a name="ToleranceThresholdPerDomainInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput"></a>

```go
func ToleranceThresholdPerDomainInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```go
func WaitTimeBetweenBatchInSecondsInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```go
func WaitTimeBetweenDomainInSecondsInput() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy"></a>

```go
func PatchingConfigStrategy() *string
```

- *Type:* *string

---

##### `ToleranceThresholdPerBatch`<sup>Required</sup> <a name="ToleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch"></a>

```go
func ToleranceThresholdPerBatch() *f64
```

- *Type:* *f64

---

##### `ToleranceThresholdPerDomain`<sup>Required</sup> <a name="ToleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain"></a>

```go
func ToleranceThresholdPerDomain() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```go
func WaitTimeBetweenBatchInSeconds() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```go
func WaitTimeBetweenDomainInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---


### BdsBdsInstanceOsPatchActionTimeoutsOutputReference <a name="BdsBdsInstanceOsPatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceospatchaction"

bdsbdsinstanceospatchaction.NewBdsBdsInstanceOsPatchActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstanceOsPatchActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



