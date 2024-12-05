# `functionsFunction` Submodule <a name="`functionsFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsFunction <a name="FunctionsFunction" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function oci_functions_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.NewFunctionsFunction(scope Construct, id *string, config FunctionsFunctionConfig) FunctionsFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig">FunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig">FunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig">PutProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig">PutTraceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetProvisionedConcurrencyConfig">ResetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetSourceDetails">ResetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTraceConfig">ResetTraceConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisionedConcurrencyConfig` <a name="PutProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig"></a>

```go
func PutProvisionedConcurrencyConfig(value FunctionsFunctionProvisionedConcurrencyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails"></a>

```go
func PutSourceDetails(value FunctionsFunctionSourceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts"></a>

```go
func PutTimeouts(value FunctionsFunctionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

---

##### `PutTraceConfig` <a name="PutTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig"></a>

```go
func PutTraceConfig(value FunctionsFunctionTraceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImageDigest"></a>

```go
func ResetImageDigest()
```

##### `ResetProvisionedConcurrencyConfig` <a name="ResetProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetProvisionedConcurrencyConfig"></a>

```go
func ResetProvisionedConcurrencyConfig()
```

##### `ResetSourceDetails` <a name="ResetSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetSourceDetails"></a>

```go
func ResetSourceDetails()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraceConfig` <a name="ResetTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTraceConfig"></a>

```go
func ResetTraceConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.FunctionsFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.FunctionsFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.FunctionsFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.FunctionsFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FunctionsFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.invokeEndpoint">InvokeEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference">FunctionsFunctionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference">FunctionsFunctionSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference">FunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfig">TraceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference">FunctionsFunctionTraceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.configInput">ConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigestInput">ImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbsInput">MemoryInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfigInput">ProvisionedConcurrencyConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfigInput">TraceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.config">Config</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `InvokeEndpoint`<sup>Required</sup> <a name="InvokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.invokeEndpoint"></a>

```go
func InvokeEndpoint() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfig`<sup>Required</sup> <a name="ProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfig"></a>

```go
func ProvisionedConcurrencyConfig() FunctionsFunctionProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference">FunctionsFunctionProvisionedConcurrencyConfigOutputReference</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetails"></a>

```go
func SourceDetails() FunctionsFunctionSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference">FunctionsFunctionSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeouts"></a>

```go
func Timeouts() FunctionsFunctionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference">FunctionsFunctionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TraceConfig`<sup>Required</sup> <a name="TraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfig"></a>

```go
func TraceConfig() FunctionsFunctionTraceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference">FunctionsFunctionTraceConfigOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.configInput"></a>

```go
func ConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigestInput"></a>

```go
func ImageDigestInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `MemoryInMbsInput`<sup>Optional</sup> <a name="MemoryInMbsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbsInput"></a>

```go
func MemoryInMbsInput() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfigInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfigInput"></a>

```go
func ProvisionedConcurrencyConfigInput() FunctionsFunctionProvisionedConcurrencyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetailsInput"></a>

```go
func SourceDetailsInput() FunctionsFunctionSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TraceConfigInput`<sup>Optional</sup> <a name="TraceConfigInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfigInput"></a>

```go
func TraceConfigInput() FunctionsFunctionTraceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.config"></a>

```go
func Config() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbs"></a>

```go
func MemoryInMbs() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsFunctionConfig <a name="FunctionsFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

&functionsfunction.FunctionsFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	DisplayName: *string,
	MemoryInMbs: *string,
	Config: *map[string]*string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Image: *string,
	ImageDigest: *string,
	ProvisionedConcurrencyConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig,
	SourceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.functionsFunction.FunctionsFunctionSourceDetails,
	TimeoutInSeconds: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.functionsFunction.FunctionsFunctionTimeouts,
	TraceConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.functionsFunction.FunctionsFunctionTraceConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#application_id FunctionsFunction#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#display_name FunctionsFunction#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#memory_in_mbs FunctionsFunction#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.config">Config</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#config FunctionsFunction#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#defined_tags FunctionsFunction#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#freeform_tags FunctionsFunction#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#id FunctionsFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image FunctionsFunction#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image_digest FunctionsFunction#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | provisioned_concurrency_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeout_in_seconds FunctionsFunction#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.traceConfig">TraceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | trace_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#application_id FunctionsFunction#application_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#display_name FunctionsFunction#display_name}.

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.memoryInMbs"></a>

```go
MemoryInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#memory_in_mbs FunctionsFunction#memory_in_mbs}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.config"></a>

```go
Config *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#config FunctionsFunction#config}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#defined_tags FunctionsFunction#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#freeform_tags FunctionsFunction#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#id FunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image FunctionsFunction#image}.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.imageDigest"></a>

```go
ImageDigest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image_digest FunctionsFunction#image_digest}.

---

##### `ProvisionedConcurrencyConfig`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisionedConcurrencyConfig"></a>

```go
ProvisionedConcurrencyConfig FunctionsFunctionProvisionedConcurrencyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

provisioned_concurrency_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#provisioned_concurrency_config FunctionsFunction#provisioned_concurrency_config}

---

##### `SourceDetails`<sup>Optional</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.sourceDetails"></a>

```go
SourceDetails FunctionsFunctionSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_details FunctionsFunction#source_details}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeout_in_seconds FunctionsFunction#timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeouts"></a>

```go
Timeouts FunctionsFunctionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeouts FunctionsFunction#timeouts}

---

##### `TraceConfig`<sup>Optional</sup> <a name="TraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.traceConfig"></a>

```go
TraceConfig FunctionsFunctionTraceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

trace_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#trace_config FunctionsFunction#trace_config}

---

### FunctionsFunctionProvisionedConcurrencyConfig <a name="FunctionsFunctionProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

&functionsfunction.FunctionsFunctionProvisionedConcurrencyConfig {
	Strategy: *string,
	Count: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.strategy">Strategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#strategy FunctionsFunction#strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#count FunctionsFunction#count}. |

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#strategy FunctionsFunction#strategy}.

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#count FunctionsFunction#count}.

---

### FunctionsFunctionSourceDetails <a name="FunctionsFunctionSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

&functionsfunction.FunctionsFunctionSourceDetails {
	PbfListingId: *string,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.pbfListingId">PbfListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#pbf_listing_id FunctionsFunction#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_type FunctionsFunction#source_type}. |

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.pbfListingId"></a>

```go
PbfListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#pbf_listing_id FunctionsFunction#pbf_listing_id}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_type FunctionsFunction#source_type}.

---

### FunctionsFunctionTimeouts <a name="FunctionsFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

&functionsfunction.FunctionsFunctionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#create FunctionsFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#delete FunctionsFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#update FunctionsFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#create FunctionsFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#delete FunctionsFunction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#update FunctionsFunction#update}.

---

### FunctionsFunctionTraceConfig <a name="FunctionsFunctionTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

&functionsfunction.FunctionsFunctionTraceConfig {
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#is_enabled FunctionsFunction#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#is_enabled FunctionsFunction#is_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsFunctionProvisionedConcurrencyConfigOutputReference <a name="FunctionsFunctionProvisionedConcurrencyConfigOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.NewFunctionsFunctionProvisionedConcurrencyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionsFunctionProvisionedConcurrencyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resetCount"></a>

```go
func ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionsFunctionProvisionedConcurrencyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---


### FunctionsFunctionSourceDetailsOutputReference <a name="FunctionsFunctionSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.NewFunctionsFunctionSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionsFunctionSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingIdInput">PbfListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingId">PbfListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PbfListingIdInput`<sup>Optional</sup> <a name="PbfListingIdInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingIdInput"></a>

```go
func PbfListingIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingId"></a>

```go
func PbfListingId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionsFunctionSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---


### FunctionsFunctionTimeoutsOutputReference <a name="FunctionsFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.NewFunctionsFunctionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionsFunctionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionsFunctionTraceConfigOutputReference <a name="FunctionsFunctionTraceConfigOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/functionsfunction"

functionsfunction.NewFunctionsFunctionTraceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionsFunctionTraceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionsFunctionTraceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---



