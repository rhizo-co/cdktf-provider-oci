# `objectstoragePreauthrequest` Submodule <a name="`objectstoragePreauthrequest` Submodule" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstoragePreauthrequest <a name="ObjectstoragePreauthrequest" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest oci_objectstorage_preauthrequest}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.NewObjectstoragePreauthrequest(scope Construct, id *string, config ObjectstoragePreauthrequestConfig) ObjectstoragePreauthrequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig">ObjectstoragePreauthrequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig">ObjectstoragePreauthrequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetBucketListingAction">ResetBucketListingAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts"></a>

```go
func PutTimeouts(value ObjectstoragePreauthrequestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

---

##### `ResetBucketListingAction` <a name="ResetBucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetBucketListingAction"></a>

```go
func ResetBucketListingAction()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetId"></a>

```go
func ResetId()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObject"></a>

```go
func ResetObject()
```

##### `ResetObjectName` <a name="ResetObjectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObjectName"></a>

```go
func ResetObjectName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.ObjectstoragePreauthrequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.ObjectstoragePreauthrequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.ObjectstoragePreauthrequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.ObjectstoragePreauthrequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObjectstoragePreauthrequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObjectstoragePreauthrequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstoragePreauthrequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessUri">AccessUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.parId">ParId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference">ObjectstoragePreauthrequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingActionInput">BucketListingActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectNameInput">ObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpiresInput">TimeExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingAction">BucketListingAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessUri`<sup>Required</sup> <a name="AccessUri" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessUri"></a>

```go
func AccessUri() *string
```

- *Type:* *string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fullPath"></a>

```go
func FullPath() *string
```

- *Type:* *string

---

##### `ParId`<sup>Required</sup> <a name="ParId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.parId"></a>

```go
func ParId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeouts"></a>

```go
func Timeouts() ObjectstoragePreauthrequestTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference">ObjectstoragePreauthrequestTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketListingActionInput`<sup>Optional</sup> <a name="BucketListingActionInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingActionInput"></a>

```go
func BucketListingActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectNameInput"></a>

```go
func ObjectNameInput() *string
```

- *Type:* *string

---

##### `TimeExpiresInput`<sup>Optional</sup> <a name="TimeExpiresInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpiresInput"></a>

```go
func TimeExpiresInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketListingAction`<sup>Required</sup> <a name="BucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingAction"></a>

```go
func BucketListingAction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstoragePreauthrequestConfig <a name="ObjectstoragePreauthrequestConfig" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

&objectstoragepreauthrequest.ObjectstoragePreauthrequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessType: *string,
	Bucket: *string,
	Name: *string,
	Namespace: *string,
	TimeExpires: *string,
	BucketListingAction: *string,
	Id: *string,
	Object: *string,
	ObjectName: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#access_type ObjectstoragePreauthrequest#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket ObjectstoragePreauthrequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#name ObjectstoragePreauthrequest#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#namespace ObjectstoragePreauthrequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#time_expires ObjectstoragePreauthrequest#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucketListingAction">BucketListingAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket_listing_action ObjectstoragePreauthrequest#bucket_listing_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#id ObjectstoragePreauthrequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object ObjectstoragePreauthrequest#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.objectName">ObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object_name ObjectstoragePreauthrequest#object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#access_type ObjectstoragePreauthrequest#access_type}.

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket ObjectstoragePreauthrequest#bucket}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#name ObjectstoragePreauthrequest#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#namespace ObjectstoragePreauthrequest#namespace}.

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeExpires"></a>

```go
TimeExpires *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#time_expires ObjectstoragePreauthrequest#time_expires}.

---

##### `BucketListingAction`<sup>Optional</sup> <a name="BucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucketListingAction"></a>

```go
BucketListingAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket_listing_action ObjectstoragePreauthrequest#bucket_listing_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#id ObjectstoragePreauthrequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object ObjectstoragePreauthrequest#object}.

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.objectName"></a>

```go
ObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object_name ObjectstoragePreauthrequest#object_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeouts"></a>

```go
Timeouts ObjectstoragePreauthrequestTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#timeouts ObjectstoragePreauthrequest#timeouts}

---

### ObjectstoragePreauthrequestTimeouts <a name="ObjectstoragePreauthrequestTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

&objectstoragepreauthrequest.ObjectstoragePreauthrequestTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#create ObjectstoragePreauthrequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#delete ObjectstoragePreauthrequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#update ObjectstoragePreauthrequest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#create ObjectstoragePreauthrequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#delete ObjectstoragePreauthrequest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#update ObjectstoragePreauthrequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstoragePreauthrequestTimeoutsOutputReference <a name="ObjectstoragePreauthrequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/objectstoragepreauthrequest"

objectstoragepreauthrequest.NewObjectstoragePreauthrequestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObjectstoragePreauthrequestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



