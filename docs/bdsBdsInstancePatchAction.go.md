# `bdsBdsInstancePatchAction` Submodule <a name="`bdsBdsInstancePatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstancePatchAction <a name="BdsBdsInstancePatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.NewBdsBdsInstancePatchAction(scope Construct, id *string, config BdsBdsInstancePatchActionConfig) BdsBdsInstancePatchAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig">BdsBdsInstancePatchActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig">BdsBdsInstancePatchActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig">PutPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig">ResetPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPatchingConfig` <a name="PutPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig"></a>

```go
func PutPatchingConfig(value BdsBdsInstancePatchActionPatchingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts"></a>

```go
func PutTimeouts(value BdsBdsInstancePatchActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId"></a>

```go
func ResetId()
```

##### `ResetPatchingConfig` <a name="ResetPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig"></a>

```go
func ResetPatchingConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.BdsBdsInstancePatchAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.BdsBdsInstancePatchAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.BdsBdsInstancePatchAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.BdsBdsInstancePatchAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BdsBdsInstancePatchAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BdsBdsInstancePatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstancePatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig">PatchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput">PatchingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PatchingConfig`<sup>Required</sup> <a name="PatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig"></a>

```go
func PatchingConfig() BdsBdsInstancePatchActionPatchingConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts"></a>

```go
func Timeouts() BdsBdsInstancePatchActionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput"></a>

```go
func ClusterAdminPasswordInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PatchingConfigInput`<sup>Optional</sup> <a name="PatchingConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput"></a>

```go
func PatchingConfigInput() BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstancePatchActionConfig <a name="BdsBdsInstancePatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

&bdsbdsinstancepatchaction.BdsBdsInstancePatchActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ClusterAdminPassword: *string,
	Version: *string,
	Id: *string,
	PatchingConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig">PatchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword"></a>

```go
ClusterAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PatchingConfig`<sup>Optional</sup> <a name="PatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig"></a>

```go
PatchingConfig BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts"></a>

```go
Timeouts BdsBdsInstancePatchActionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

### BdsBdsInstancePatchActionPatchingConfig <a name="BdsBdsInstancePatchActionPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

&bdsbdsinstancepatchaction.BdsBdsInstancePatchActionPatchingConfig {
	PatchingConfigStrategy: *string,
	BatchSize: *f64,
	WaitTimeBetweenBatchInSeconds: *f64,
	WaitTimeBetweenDomainInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}. |

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy"></a>

```go
PatchingConfigStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}.

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds"></a>

```go
WaitTimeBetweenBatchInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}.

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds"></a>

```go
WaitTimeBetweenDomainInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstancePatchActionTimeouts <a name="BdsBdsInstancePatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

&bdsbdsinstancepatchaction.BdsBdsInstancePatchActionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstancePatchActionPatchingConfigOutputReference <a name="BdsBdsInstancePatchActionPatchingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.NewBdsBdsInstancePatchActionPatchingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstancePatchActionPatchingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds">ResetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds">ResetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetWaitTimeBetweenBatchInSeconds` <a name="ResetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```go
func ResetWaitTimeBetweenBatchInSeconds()
```

##### `ResetWaitTimeBetweenDomainInSeconds` <a name="ResetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```go
func ResetWaitTimeBetweenDomainInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput">PatchingConfigStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput">WaitTimeBetweenBatchInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput">WaitTimeBetweenDomainInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `PatchingConfigStrategyInput`<sup>Optional</sup> <a name="PatchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput"></a>

```go
func PatchingConfigStrategyInput() *string
```

- *Type:* *string

---

##### `WaitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```go
func WaitTimeBetweenBatchInSecondsInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```go
func WaitTimeBetweenDomainInSecondsInput() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy"></a>

```go
func PatchingConfigStrategy() *string
```

- *Type:* *string

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```go
func WaitTimeBetweenBatchInSeconds() *f64
```

- *Type:* *f64

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```go
func WaitTimeBetweenDomainInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---


### BdsBdsInstancePatchActionTimeoutsOutputReference <a name="BdsBdsInstancePatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstancepatchaction"

bdsbdsinstancepatchaction.NewBdsBdsInstancePatchActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstancePatchActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



