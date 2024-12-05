# `objectstorageObjectLifecyclePolicy` Submodule <a name="`objectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectLifecyclePolicy <a name="ObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.NewObjectstorageObjectLifecyclePolicy(scope Construct, id *string, config ObjectstorageObjectLifecyclePolicyConfig) ObjectstorageObjectLifecyclePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig">ObjectstorageObjectLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig">ObjectstorageObjectLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts"></a>

```go
func PutTimeouts(value ObjectstorageObjectLifecyclePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObjectstorageObjectLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules"></a>

```go
func Rules() ObjectstorageObjectLifecyclePolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts"></a>

```go
func Timeouts() ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectLifecyclePolicyConfig <a name="ObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

&objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Namespace: *string,
	Id: *string,
	Rules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts"></a>

```go
Timeouts ObjectstorageObjectLifecyclePolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

### ObjectstorageObjectLifecyclePolicyRules <a name="ObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

&objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicyRules {
	Action: *string,
	IsEnabled: interface{},
	Name: *string,
	TimeAmount: *string,
	TimeUnit: *string,
	ObjectNameFilter: github.com/rhizo-co/cdktf-provider-oci-go/oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount">TimeAmount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter">ObjectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | object_name_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}.

---

##### `TimeAmount`<sup>Required</sup> <a name="TimeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount"></a>

```go
TimeAmount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit"></a>

```go
TimeUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}.

---

##### `ObjectNameFilter`<sup>Optional</sup> <a name="ObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter"></a>

```go
ObjectNameFilter ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

object_name_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#object_name_filter ObjectstorageObjectLifecyclePolicy#object_name_filter}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}.

---

### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

&objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {
	ExclusionPatterns: *[]*string,
	InclusionPatterns: *[]*string,
	InclusionPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns">InclusionPatterns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}. |

---

##### `ExclusionPatterns`<sup>Optional</sup> <a name="ExclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns"></a>

```go
ExclusionPatterns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}.

---

##### `InclusionPatterns`<sup>Optional</sup> <a name="InclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns"></a>

```go
InclusionPatterns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}.

---

##### `InclusionPrefixes`<sup>Optional</sup> <a name="InclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes"></a>

```go
InclusionPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}.

---

### ObjectstorageObjectLifecyclePolicyTimeouts <a name="ObjectstorageObjectLifecyclePolicyTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

&objectstorageobjectlifecyclepolicy.ObjectstorageObjectLifecyclePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectLifecyclePolicyRulesList <a name="ObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.NewObjectstorageObjectLifecyclePolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObjectstorageObjectLifecyclePolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```go
func Get(index *f64) ObjectstorageObjectLifecyclePolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.NewObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns">ResetExclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns">ResetInclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes">ResetInclusionPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusionPatterns` <a name="ResetExclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns"></a>

```go
func ResetExclusionPatterns()
```

##### `ResetInclusionPatterns` <a name="ResetInclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns"></a>

```go
func ResetInclusionPatterns()
```

##### `ResetInclusionPrefixes` <a name="ResetInclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes"></a>

```go
func ResetInclusionPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput">ExclusionPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput">InclusionPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput">InclusionPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">InclusionPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionPatternsInput`<sup>Optional</sup> <a name="ExclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput"></a>

```go
func ExclusionPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPatternsInput`<sup>Optional</sup> <a name="InclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput"></a>

```go
func InclusionPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPrefixesInput`<sup>Optional</sup> <a name="InclusionPrefixesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput"></a>

```go
func InclusionPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusionPatterns`<sup>Required</sup> <a name="ExclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```go
func ExclusionPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPatterns`<sup>Required</sup> <a name="InclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```go
func InclusionPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPrefixes`<sup>Required</sup> <a name="InclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```go
func InclusionPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### ObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.NewObjectstorageObjectLifecyclePolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObjectstorageObjectLifecyclePolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter">PutObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter">ResetObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectNameFilter` <a name="PutObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter"></a>

```go
func PutObjectNameFilter(value ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `ResetObjectNameFilter` <a name="ResetObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter"></a>

```go
func ResetObjectNameFilter()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">ObjectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput">ObjectNameFilterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput">TimeAmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput">TimeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">TimeAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectNameFilter`<sup>Required</sup> <a name="ObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```go
func ObjectNameFilter() ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectNameFilterInput`<sup>Optional</sup> <a name="ObjectNameFilterInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput"></a>

```go
func ObjectNameFilterInput() ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeAmountInput`<sup>Optional</sup> <a name="TimeAmountInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput"></a>

```go
func TimeAmountInput() *string
```

- *Type:* *string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput"></a>

```go
func TimeUnitInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TimeAmount`<sup>Required</sup> <a name="TimeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```go
func TimeAmount() *string
```

- *Type:* *string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```go
func TimeUnit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference <a name="ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstorageobjectlifecyclepolicy"

objectstorageobjectlifecyclepolicy.NewObjectstorageObjectLifecyclePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



