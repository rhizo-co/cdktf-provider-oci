# `generativeAiModel` Submodule <a name="`generativeAiModel` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiModel <a name="GenerativeAiModel" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model oci_generative_ai_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModel(scope Construct, id *string, config GenerativeAiModelConfig) GenerativeAiModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails">PutFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor">ResetVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFineTuneDetails` <a name="PutFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails"></a>

```go
func PutFineTuneDetails(value GenerativeAiModelFineTuneDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts"></a>

```go
func PutTimeouts(value GenerativeAiModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVendor` <a name="ResetVendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor"></a>

```go
func ResetVendor()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.GenerativeAiModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.GenerativeAiModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.GenerativeAiModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.GenerativeAiModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenerativeAiModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenerativeAiModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails">FineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported">IsLongTermSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics">ModelMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated">TimeDeprecated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput">BaseModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput">FineTuneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput">VendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId">BaseModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `FineTuneDetails`<sup>Required</sup> <a name="FineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails"></a>

```go
func FineTuneDetails() GenerativeAiModelFineTuneDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a>

---

##### `IsLongTermSupported`<sup>Required</sup> <a name="IsLongTermSupported" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported"></a>

```go
func IsLongTermSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ModelMetrics`<sup>Required</sup> <a name="ModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics"></a>

```go
func ModelMetrics() GenerativeAiModelModelMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDeprecated`<sup>Required</sup> <a name="TimeDeprecated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated"></a>

```go
func TimeDeprecated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts"></a>

```go
func Timeouts() GenerativeAiModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `BaseModelIdInput`<sup>Optional</sup> <a name="BaseModelIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput"></a>

```go
func BaseModelIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FineTuneDetailsInput`<sup>Optional</sup> <a name="FineTuneDetailsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput"></a>

```go
func FineTuneDetailsInput() GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput"></a>

```go
func VendorInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `BaseModelId`<sup>Required</sup> <a name="BaseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId"></a>

```go
func BaseModelId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiModelConfig <a name="GenerativeAiModelConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseModelId: *string,
	CompartmentId: *string,
	FineTuneDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiModel.GenerativeAiModelFineTuneDetails,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiModel.GenerativeAiModelTimeouts,
	Vendor: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId">BaseModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails">FineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | fine_tune_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor">Vendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseModelId`<sup>Required</sup> <a name="BaseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId"></a>

```go
BaseModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}.

---

##### `FineTuneDetails`<sup>Required</sup> <a name="FineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails"></a>

```go
FineTuneDetails GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

fine_tune_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts"></a>

```go
Timeouts GenerativeAiModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}

---

##### `Vendor`<sup>Optional</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor"></a>

```go
Vendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}.

---

### GenerativeAiModelFineTuneDetails <a name="GenerativeAiModelFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelFineTuneDetails {
	DedicatedAiClusterId: *string,
	TrainingDataset: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset,
	TrainingConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId">DedicatedAiClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig">TrainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | training_config block. |

---

##### `DedicatedAiClusterId`<sup>Required</sup> <a name="DedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId"></a>

```go
DedicatedAiClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}.

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset"></a>

```go
TrainingDataset GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}

---

##### `TrainingConfig`<sup>Optional</sup> <a name="TrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig"></a>

```go
TrainingConfig GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

training_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}

---

### GenerativeAiModelFineTuneDetailsTrainingConfig <a name="GenerativeAiModelFineTuneDetailsTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelFineTuneDetailsTrainingConfig {
	TrainingConfigType: *string,
	EarlyStoppingPatience: *f64,
	EarlyStoppingThreshold: *f64,
	LearningRate: *f64,
	LogModelMetricsIntervalInSteps: *f64,
	LoraAlpha: *f64,
	LoraDropout: *f64,
	LoraR: *f64,
	NumOfLastLayers: *f64,
	TotalTrainingEpochs: *f64,
	TrainingBatchSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType">TrainingConfigType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience">EarlyStoppingPatience</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold">EarlyStoppingThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate">LearningRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps">LogModelMetricsIntervalInSteps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha">LoraAlpha</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout">LoraDropout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR">LoraR</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers">NumOfLastLayers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs">TotalTrainingEpochs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize">TrainingBatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}. |

---

##### `TrainingConfigType`<sup>Required</sup> <a name="TrainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType"></a>

```go
TrainingConfigType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}.

---

##### `EarlyStoppingPatience`<sup>Optional</sup> <a name="EarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience"></a>

```go
EarlyStoppingPatience *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}.

---

##### `EarlyStoppingThreshold`<sup>Optional</sup> <a name="EarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold"></a>

```go
EarlyStoppingThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}.

---

##### `LearningRate`<sup>Optional</sup> <a name="LearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate"></a>

```go
LearningRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}.

---

##### `LogModelMetricsIntervalInSteps`<sup>Optional</sup> <a name="LogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps"></a>

```go
LogModelMetricsIntervalInSteps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}.

---

##### `LoraAlpha`<sup>Optional</sup> <a name="LoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha"></a>

```go
LoraAlpha *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}.

---

##### `LoraDropout`<sup>Optional</sup> <a name="LoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout"></a>

```go
LoraDropout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}.

---

##### `LoraR`<sup>Optional</sup> <a name="LoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR"></a>

```go
LoraR *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}.

---

##### `NumOfLastLayers`<sup>Optional</sup> <a name="NumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers"></a>

```go
NumOfLastLayers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}.

---

##### `TotalTrainingEpochs`<sup>Optional</sup> <a name="TotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs"></a>

```go
TotalTrainingEpochs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}.

---

##### `TrainingBatchSize`<sup>Optional</sup> <a name="TrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize"></a>

```go
TrainingBatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}.

---

### GenerativeAiModelFineTuneDetailsTrainingDataset <a name="GenerativeAiModelFineTuneDetailsTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelFineTuneDetailsTrainingDataset {
	Bucket: *string,
	DatasetType: *string,
	Namespace: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}.

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}.

---

### GenerativeAiModelModelMetrics <a name="GenerativeAiModelModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelModelMetrics {

}
```


### GenerativeAiModelTimeouts <a name="GenerativeAiModelTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

&generativeaimodel.GenerativeAiModelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiModelFineTuneDetailsOutputReference <a name="GenerativeAiModelFineTuneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelFineTuneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiModelFineTuneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig">PutTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset">PutTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig">ResetTrainingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrainingConfig` <a name="PutTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig"></a>

```go
func PutTrainingConfig(value GenerativeAiModelFineTuneDetailsTrainingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `PutTrainingDataset` <a name="PutTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset"></a>

```go
func PutTrainingDataset(value GenerativeAiModelFineTuneDetailsTrainingDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `ResetTrainingConfig` <a name="ResetTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig"></a>

```go
func ResetTrainingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig">TrainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput">DedicatedAiClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput">TrainingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput">TrainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId">DedicatedAiClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrainingConfig`<sup>Required</sup> <a name="TrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig"></a>

```go
func TrainingConfig() GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a>

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset"></a>

```go
func TrainingDataset() GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a>

---

##### `DedicatedAiClusterIdInput`<sup>Optional</sup> <a name="DedicatedAiClusterIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput"></a>

```go
func DedicatedAiClusterIdInput() *string
```

- *Type:* *string

---

##### `TrainingConfigInput`<sup>Optional</sup> <a name="TrainingConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput"></a>

```go
func TrainingConfigInput() GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `TrainingDatasetInput`<sup>Optional</sup> <a name="TrainingDatasetInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput"></a>

```go
func TrainingDatasetInput() GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `DedicatedAiClusterId`<sup>Required</sup> <a name="DedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId"></a>

```go
func DedicatedAiClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---


### GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience">ResetEarlyStoppingPatience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold">ResetEarlyStoppingThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate">ResetLearningRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps">ResetLogModelMetricsIntervalInSteps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha">ResetLoraAlpha</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout">ResetLoraDropout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR">ResetLoraR</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers">ResetNumOfLastLayers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs">ResetTotalTrainingEpochs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize">ResetTrainingBatchSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEarlyStoppingPatience` <a name="ResetEarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience"></a>

```go
func ResetEarlyStoppingPatience()
```

##### `ResetEarlyStoppingThreshold` <a name="ResetEarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold"></a>

```go
func ResetEarlyStoppingThreshold()
```

##### `ResetLearningRate` <a name="ResetLearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate"></a>

```go
func ResetLearningRate()
```

##### `ResetLogModelMetricsIntervalInSteps` <a name="ResetLogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps"></a>

```go
func ResetLogModelMetricsIntervalInSteps()
```

##### `ResetLoraAlpha` <a name="ResetLoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha"></a>

```go
func ResetLoraAlpha()
```

##### `ResetLoraDropout` <a name="ResetLoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout"></a>

```go
func ResetLoraDropout()
```

##### `ResetLoraR` <a name="ResetLoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR"></a>

```go
func ResetLoraR()
```

##### `ResetNumOfLastLayers` <a name="ResetNumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers"></a>

```go
func ResetNumOfLastLayers()
```

##### `ResetTotalTrainingEpochs` <a name="ResetTotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs"></a>

```go
func ResetTotalTrainingEpochs()
```

##### `ResetTrainingBatchSize` <a name="ResetTrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize"></a>

```go
func ResetTrainingBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput">EarlyStoppingPatienceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput">EarlyStoppingThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput">LearningRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput">LogModelMetricsIntervalInStepsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput">LoraAlphaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput">LoraDropoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput">LoraRInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput">NumOfLastLayersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput">TotalTrainingEpochsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput">TrainingBatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput">TrainingConfigTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience">EarlyStoppingPatience</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold">EarlyStoppingThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate">LearningRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps">LogModelMetricsIntervalInSteps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha">LoraAlpha</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout">LoraDropout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR">LoraR</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers">NumOfLastLayers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs">TotalTrainingEpochs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize">TrainingBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType">TrainingConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EarlyStoppingPatienceInput`<sup>Optional</sup> <a name="EarlyStoppingPatienceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput"></a>

```go
func EarlyStoppingPatienceInput() *f64
```

- *Type:* *f64

---

##### `EarlyStoppingThresholdInput`<sup>Optional</sup> <a name="EarlyStoppingThresholdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput"></a>

```go
func EarlyStoppingThresholdInput() *f64
```

- *Type:* *f64

---

##### `LearningRateInput`<sup>Optional</sup> <a name="LearningRateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput"></a>

```go
func LearningRateInput() *f64
```

- *Type:* *f64

---

##### `LogModelMetricsIntervalInStepsInput`<sup>Optional</sup> <a name="LogModelMetricsIntervalInStepsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput"></a>

```go
func LogModelMetricsIntervalInStepsInput() *f64
```

- *Type:* *f64

---

##### `LoraAlphaInput`<sup>Optional</sup> <a name="LoraAlphaInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput"></a>

```go
func LoraAlphaInput() *f64
```

- *Type:* *f64

---

##### `LoraDropoutInput`<sup>Optional</sup> <a name="LoraDropoutInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput"></a>

```go
func LoraDropoutInput() *f64
```

- *Type:* *f64

---

##### `LoraRInput`<sup>Optional</sup> <a name="LoraRInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput"></a>

```go
func LoraRInput() *f64
```

- *Type:* *f64

---

##### `NumOfLastLayersInput`<sup>Optional</sup> <a name="NumOfLastLayersInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput"></a>

```go
func NumOfLastLayersInput() *f64
```

- *Type:* *f64

---

##### `TotalTrainingEpochsInput`<sup>Optional</sup> <a name="TotalTrainingEpochsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput"></a>

```go
func TotalTrainingEpochsInput() *f64
```

- *Type:* *f64

---

##### `TrainingBatchSizeInput`<sup>Optional</sup> <a name="TrainingBatchSizeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput"></a>

```go
func TrainingBatchSizeInput() *f64
```

- *Type:* *f64

---

##### `TrainingConfigTypeInput`<sup>Optional</sup> <a name="TrainingConfigTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput"></a>

```go
func TrainingConfigTypeInput() *string
```

- *Type:* *string

---

##### `EarlyStoppingPatience`<sup>Required</sup> <a name="EarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience"></a>

```go
func EarlyStoppingPatience() *f64
```

- *Type:* *f64

---

##### `EarlyStoppingThreshold`<sup>Required</sup> <a name="EarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold"></a>

```go
func EarlyStoppingThreshold() *f64
```

- *Type:* *f64

---

##### `LearningRate`<sup>Required</sup> <a name="LearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate"></a>

```go
func LearningRate() *f64
```

- *Type:* *f64

---

##### `LogModelMetricsIntervalInSteps`<sup>Required</sup> <a name="LogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps"></a>

```go
func LogModelMetricsIntervalInSteps() *f64
```

- *Type:* *f64

---

##### `LoraAlpha`<sup>Required</sup> <a name="LoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha"></a>

```go
func LoraAlpha() *f64
```

- *Type:* *f64

---

##### `LoraDropout`<sup>Required</sup> <a name="LoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout"></a>

```go
func LoraDropout() *f64
```

- *Type:* *f64

---

##### `LoraR`<sup>Required</sup> <a name="LoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR"></a>

```go
func LoraR() *f64
```

- *Type:* *f64

---

##### `NumOfLastLayers`<sup>Required</sup> <a name="NumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers"></a>

```go
func NumOfLastLayers() *f64
```

- *Type:* *f64

---

##### `TotalTrainingEpochs`<sup>Required</sup> <a name="TotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs"></a>

```go
func TotalTrainingEpochs() *f64
```

- *Type:* *f64

---

##### `TrainingBatchSize`<sup>Required</sup> <a name="TrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize"></a>

```go
func TrainingBatchSize() *f64
```

- *Type:* *f64

---

##### `TrainingConfigType`<sup>Required</sup> <a name="TrainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType"></a>

```go
func TrainingConfigType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---


### GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---


### GenerativeAiModelModelMetricsList <a name="GenerativeAiModelModelMetricsList" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelModelMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenerativeAiModelModelMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get"></a>

```go
func Get(index *f64) GenerativeAiModelModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GenerativeAiModelModelMetricsOutputReference <a name="GenerativeAiModelModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelModelMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenerativeAiModelModelMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy">FinalAccuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss">FinalLoss</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType">ModelMetricsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FinalAccuracy`<sup>Required</sup> <a name="FinalAccuracy" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy"></a>

```go
func FinalAccuracy() *f64
```

- *Type:* *f64

---

##### `FinalLoss`<sup>Required</sup> <a name="FinalLoss" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss"></a>

```go
func FinalLoss() *f64
```

- *Type:* *f64

---

##### `ModelMetricsType`<sup>Required</sup> <a name="ModelMetricsType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType"></a>

```go
func ModelMetricsType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiModelModelMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a>

---


### GenerativeAiModelTimeoutsOutputReference <a name="GenerativeAiModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaimodel"

generativeaimodel.NewGenerativeAiModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



