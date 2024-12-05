# `functionsInvokeFunction` Submodule <a name="`functionsInvokeFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsInvokeFunction <a name="FunctionsInvokeFunction" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function oci_functions_invoke_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.NewFunctionsInvokeFunction(scope Construct, id *string, config FunctionsInvokeFunctionConfig) FunctionsInvokeFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent">ResetFnIntent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType">ResetFnInvokeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath">ResetInputBodySourcePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody">ResetInvokeFunctionBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded">ResetInvokeFunctionBodyBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts"></a>

```go
func PutTimeouts(value FunctionsInvokeFunctionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent"></a>

```go
func ResetBase64EncodeContent()
```

##### `ResetFnIntent` <a name="ResetFnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent"></a>

```go
func ResetFnIntent()
```

##### `ResetFnInvokeType` <a name="ResetFnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType"></a>

```go
func ResetFnInvokeType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetInputBodySourcePath` <a name="ResetInputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath"></a>

```go
func ResetInputBodySourcePath()
```

##### `ResetInvokeFunctionBody` <a name="ResetInvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody"></a>

```go
func ResetInvokeFunctionBody()
```

##### `ResetInvokeFunctionBodyBase64Encoded` <a name="ResetInvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded"></a>

```go
func ResetInvokeFunctionBodyBase64Encoded()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.FunctionsInvokeFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.FunctionsInvokeFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.FunctionsInvokeFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.FunctionsInvokeFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FunctionsInvokeFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FunctionsInvokeFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsInvokeFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint">InvokeEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput">FnIntentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput">FnInvokeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput">InputBodySourcePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput">InvokeFunctionBodyBase64EncodedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput">InvokeFunctionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent">FnIntent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType">FnInvokeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath">InputBodySourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody">InvokeFunctionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded">InvokeFunctionBodyBase64Encoded</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InvokeEndpoint`<sup>Required</sup> <a name="InvokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint"></a>

```go
func InvokeEndpoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts"></a>

```go
func Timeouts() FunctionsInvokeFunctionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a>

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput"></a>

```go
func Base64EncodeContentInput() interface{}
```

- *Type:* interface{}

---

##### `FnIntentInput`<sup>Optional</sup> <a name="FnIntentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput"></a>

```go
func FnIntentInput() *string
```

- *Type:* *string

---

##### `FnInvokeTypeInput`<sup>Optional</sup> <a name="FnInvokeTypeInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput"></a>

```go
func FnInvokeTypeInput() *string
```

- *Type:* *string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputBodySourcePathInput`<sup>Optional</sup> <a name="InputBodySourcePathInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput"></a>

```go
func InputBodySourcePathInput() *string
```

- *Type:* *string

---

##### `InvokeFunctionBodyBase64EncodedInput`<sup>Optional</sup> <a name="InvokeFunctionBodyBase64EncodedInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput"></a>

```go
func InvokeFunctionBodyBase64EncodedInput() *string
```

- *Type:* *string

---

##### `InvokeFunctionBodyInput`<sup>Optional</sup> <a name="InvokeFunctionBodyInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput"></a>

```go
func InvokeFunctionBodyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent"></a>

```go
func Base64EncodeContent() interface{}
```

- *Type:* interface{}

---

##### `FnIntent`<sup>Required</sup> <a name="FnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent"></a>

```go
func FnIntent() *string
```

- *Type:* *string

---

##### `FnInvokeType`<sup>Required</sup> <a name="FnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType"></a>

```go
func FnInvokeType() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputBodySourcePath`<sup>Required</sup> <a name="InputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath"></a>

```go
func InputBodySourcePath() *string
```

- *Type:* *string

---

##### `InvokeFunctionBody`<sup>Required</sup> <a name="InvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody"></a>

```go
func InvokeFunctionBody() *string
```

- *Type:* *string

---

##### `InvokeFunctionBodyBase64Encoded`<sup>Required</sup> <a name="InvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded"></a>

```go
func InvokeFunctionBodyBase64Encoded() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsInvokeFunctionConfig <a name="FunctionsInvokeFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

&functionsinvokefunction.FunctionsInvokeFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionId: *string,
	Base64EncodeContent: interface{},
	FnIntent: *string,
	FnInvokeType: *string,
	Id: *string,
	InputBodySourcePath: *string,
	InvokeFunctionBody: *string,
	InvokeFunctionBodyBase64Encoded: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent">FnIntent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType">FnInvokeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath">InputBodySourcePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody">InvokeFunctionBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded">InvokeFunctionBodyBase64Encoded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent"></a>

```go
Base64EncodeContent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `FnIntent`<sup>Optional</sup> <a name="FnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent"></a>

```go
FnIntent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `FnInvokeType`<sup>Optional</sup> <a name="FnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType"></a>

```go
FnInvokeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputBodySourcePath`<sup>Optional</sup> <a name="InputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath"></a>

```go
InputBodySourcePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `InvokeFunctionBody`<sup>Optional</sup> <a name="InvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody"></a>

```go
InvokeFunctionBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `InvokeFunctionBodyBase64Encoded`<sup>Optional</sup> <a name="InvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded"></a>

```go
InvokeFunctionBodyBase64Encoded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts"></a>

```go
Timeouts FunctionsInvokeFunctionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

### FunctionsInvokeFunctionTimeouts <a name="FunctionsInvokeFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

&functionsinvokefunction.FunctionsInvokeFunctionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsInvokeFunctionTimeoutsOutputReference <a name="FunctionsInvokeFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsinvokefunction"

functionsinvokefunction.NewFunctionsInvokeFunctionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionsInvokeFunctionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



