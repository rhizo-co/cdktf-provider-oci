# `coreInstancePoolInstance` Submodule <a name="`coreInstancePoolInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstancePoolInstance <a name="CoreInstancePoolInstance" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance oci_core_instance_pool_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.NewCoreInstancePoolInstance(scope Construct, id *string, config CoreInstancePoolInstanceConfig) CoreInstancePoolInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig">CoreInstancePoolInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig">CoreInstancePoolInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetAutoTerminateInstanceOnDelete">ResetAutoTerminateInstanceOnDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetDecrementSizeOnDelete">ResetDecrementSizeOnDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts"></a>

```go
func PutTimeouts(value CoreInstancePoolInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

---

##### `ResetAutoTerminateInstanceOnDelete` <a name="ResetAutoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetAutoTerminateInstanceOnDelete"></a>

```go
func ResetAutoTerminateInstanceOnDelete()
```

##### `ResetDecrementSizeOnDelete` <a name="ResetDecrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetDecrementSizeOnDelete"></a>

```go
func ResetDecrementSizeOnDelete()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstancePoolInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.CoreInstancePoolInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.CoreInstancePoolInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.CoreInstancePoolInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.CoreInstancePoolInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreInstancePoolInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreInstancePoolInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreInstancePoolInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstancePoolInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.loadBalancerBackends">LoadBalancerBackends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList">CoreInstancePoolInstanceLoadBalancerBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference">CoreInstancePoolInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDeleteInput">AutoTerminateInstanceOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDeleteInput">DecrementSizeOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDelete">AutoTerminateInstanceOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDelete">DecrementSizeOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `InstanceConfigurationId`<sup>Required</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceConfigurationId"></a>

```go
func InstanceConfigurationId() *string
```

- *Type:* *string

---

##### `LoadBalancerBackends`<sup>Required</sup> <a name="LoadBalancerBackends" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.loadBalancerBackends"></a>

```go
func LoadBalancerBackends() CoreInstancePoolInstanceLoadBalancerBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList">CoreInstancePoolInstanceLoadBalancerBackendsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeouts"></a>

```go
func Timeouts() CoreInstancePoolInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference">CoreInstancePoolInstanceTimeoutsOutputReference</a>

---

##### `AutoTerminateInstanceOnDeleteInput`<sup>Optional</sup> <a name="AutoTerminateInstanceOnDeleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDeleteInput"></a>

```go
func AutoTerminateInstanceOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DecrementSizeOnDeleteInput`<sup>Optional</sup> <a name="DecrementSizeOnDeleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDeleteInput"></a>

```go
func DecrementSizeOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoTerminateInstanceOnDelete`<sup>Required</sup> <a name="AutoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDelete"></a>

```go
func AutoTerminateInstanceOnDelete() interface{}
```

- *Type:* interface{}

---

##### `DecrementSizeOnDelete`<sup>Required</sup> <a name="DecrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDelete"></a>

```go
func DecrementSizeOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstancePoolInstanceConfig <a name="CoreInstancePoolInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

&coreinstancepoolinstance.CoreInstancePoolInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	InstancePoolId: *string,
	AutoTerminateInstanceOnDelete: interface{},
	DecrementSizeOnDelete: interface{},
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.autoTerminateInstanceOnDelete">AutoTerminateInstanceOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.decrementSizeOnDelete">DecrementSizeOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}.

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}.

---

##### `AutoTerminateInstanceOnDelete`<sup>Optional</sup> <a name="AutoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.autoTerminateInstanceOnDelete"></a>

```go
AutoTerminateInstanceOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}.

---

##### `DecrementSizeOnDelete`<sup>Optional</sup> <a name="DecrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.decrementSizeOnDelete"></a>

```go
DecrementSizeOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.timeouts"></a>

```go
Timeouts CoreInstancePoolInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#timeouts CoreInstancePoolInstance#timeouts}

---

### CoreInstancePoolInstanceLoadBalancerBackends <a name="CoreInstancePoolInstanceLoadBalancerBackends" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

&coreinstancepoolinstance.CoreInstancePoolInstanceLoadBalancerBackends {

}
```


### CoreInstancePoolInstanceTimeouts <a name="CoreInstancePoolInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

&coreinstancepoolinstance.CoreInstancePoolInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#create CoreInstancePoolInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#delete CoreInstancePoolInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#update CoreInstancePoolInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#create CoreInstancePoolInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#delete CoreInstancePoolInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#update CoreInstancePoolInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstancePoolInstanceLoadBalancerBackendsList <a name="CoreInstancePoolInstanceLoadBalancerBackendsList" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.NewCoreInstancePoolInstanceLoadBalancerBackendsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreInstancePoolInstanceLoadBalancerBackendsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get"></a>

```go
func Get(index *f64) CoreInstancePoolInstanceLoadBalancerBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CoreInstancePoolInstanceLoadBalancerBackendsOutputReference <a name="CoreInstancePoolInstanceLoadBalancerBackendsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.NewCoreInstancePoolInstanceLoadBalancerBackendsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreInstancePoolInstanceLoadBalancerBackendsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendHealthStatus">BackendHealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendName">BackendName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends">CoreInstancePoolInstanceLoadBalancerBackends</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendHealthStatus`<sup>Required</sup> <a name="BackendHealthStatus" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendHealthStatus"></a>

```go
func BackendHealthStatus() *string
```

- *Type:* *string

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendName"></a>

```go
func BackendName() *string
```

- *Type:* *string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstancePoolInstanceLoadBalancerBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends">CoreInstancePoolInstanceLoadBalancerBackends</a>

---


### CoreInstancePoolInstanceTimeoutsOutputReference <a name="CoreInstancePoolInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancepoolinstance"

coreinstancepoolinstance.NewCoreInstancePoolInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstancePoolInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



