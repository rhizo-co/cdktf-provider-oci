# `emailEmailReturnPath` Submodule <a name="`emailEmailReturnPath` Submodule" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailEmailReturnPath <a name="EmailEmailReturnPath" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path oci_email_email_return_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.NewEmailEmailReturnPath(scope Construct, id *string, config EmailEmailReturnPathConfig) EmailEmailReturnPath
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig">EmailEmailReturnPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig">EmailEmailReturnPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.putTimeouts"></a>

```go
func PutTimeouts(value EmailEmailReturnPathTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts">EmailEmailReturnPathTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailEmailReturnPath resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.EmailEmailReturnPath_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.EmailEmailReturnPath_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.EmailEmailReturnPath_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.EmailEmailReturnPath_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailEmailReturnPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailEmailReturnPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailEmailReturnPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailEmailReturnPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.cnameRecordValue">CnameRecordValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.dnsSubdomainName">DnsSubdomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference">EmailEmailReturnPathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.parentResourceIdInput">ParentResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CnameRecordValue`<sup>Required</sup> <a name="CnameRecordValue" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.cnameRecordValue"></a>

```go
func CnameRecordValue() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DnsSubdomainName`<sup>Required</sup> <a name="DnsSubdomainName" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.dnsSubdomainName"></a>

```go
func DnsSubdomainName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeouts"></a>

```go
func Timeouts() EmailEmailReturnPathTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference">EmailEmailReturnPathTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentResourceIdInput`<sup>Optional</sup> <a name="ParentResourceIdInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.parentResourceIdInput"></a>

```go
func ParentResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPath.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailEmailReturnPathConfig <a name="EmailEmailReturnPathConfig" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

&emailemailreturnpath.EmailEmailReturnPathConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ParentResourceId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Name: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#parent_resource_id EmailEmailReturnPath#parent_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#defined_tags EmailEmailReturnPath#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#description EmailEmailReturnPath#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#freeform_tags EmailEmailReturnPath#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#id EmailEmailReturnPath#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#name EmailEmailReturnPath#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts">EmailEmailReturnPathTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.parentResourceId"></a>

```go
ParentResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#parent_resource_id EmailEmailReturnPath#parent_resource_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#defined_tags EmailEmailReturnPath#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#description EmailEmailReturnPath#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#freeform_tags EmailEmailReturnPath#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#id EmailEmailReturnPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#name EmailEmailReturnPath#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathConfig.property.timeouts"></a>

```go
Timeouts EmailEmailReturnPathTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts">EmailEmailReturnPathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#timeouts EmailEmailReturnPath#timeouts}

---

### EmailEmailReturnPathTimeouts <a name="EmailEmailReturnPathTimeouts" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

&emailemailreturnpath.EmailEmailReturnPathTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#create EmailEmailReturnPath#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#delete EmailEmailReturnPath#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#update EmailEmailReturnPath#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#create EmailEmailReturnPath#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#delete EmailEmailReturnPath#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/email_email_return_path#update EmailEmailReturnPath#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailEmailReturnPathTimeoutsOutputReference <a name="EmailEmailReturnPathTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/emailemailreturnpath"

emailemailreturnpath.NewEmailEmailReturnPathTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmailEmailReturnPathTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.emailEmailReturnPath.EmailEmailReturnPathTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


