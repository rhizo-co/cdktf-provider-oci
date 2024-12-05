# `aiLanguageModel` Submodule <a name="`aiLanguageModel` Submodule" id="rhizo-co-terraform-provider-oci.aiLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiLanguageModel <a name="AiLanguageModel" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model oci_ai_language_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModel(scope Construct, id *string, config AiLanguageModelConfig) AiLanguageModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig">AiLanguageModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig">AiLanguageModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails">PutModelDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy">PutTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset">PutTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTestStrategy">ResetTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModelDetails` <a name="PutModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails"></a>

```go
func PutModelDetails(value AiLanguageModelModelDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---

##### `PutTestStrategy` <a name="PutTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy"></a>

```go
func PutTestStrategy(value AiLanguageModelTestStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts"></a>

```go
func PutTimeouts(value AiLanguageModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

---

##### `PutTrainingDataset` <a name="PutTrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset"></a>

```go
func PutTrainingDataset(value AiLanguageModelTrainingDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetId"></a>

```go
func ResetId()
```

##### `ResetTestStrategy` <a name="ResetTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTestStrategy"></a>

```go
func ResetTestStrategy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiLanguageModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.AiLanguageModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.AiLanguageModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.AiLanguageModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.AiLanguageModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AiLanguageModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiLanguageModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiLanguageModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AiLanguageModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.evaluationResults">EvaluationResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList">AiLanguageModelEvaluationResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetails">ModelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference">AiLanguageModelModelDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategy">TestStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference">AiLanguageModelTestStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference">AiLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference">AiLanguageModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetailsInput">ModelDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategyInput">TestStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDatasetInput">TrainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EvaluationResults`<sup>Required</sup> <a name="EvaluationResults" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.evaluationResults"></a>

```go
func EvaluationResults() AiLanguageModelEvaluationResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList">AiLanguageModelEvaluationResultsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ModelDetails`<sup>Required</sup> <a name="ModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetails"></a>

```go
func ModelDetails() AiLanguageModelModelDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference">AiLanguageModelModelDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TestStrategy`<sup>Required</sup> <a name="TestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategy"></a>

```go
func TestStrategy() AiLanguageModelTestStrategyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference">AiLanguageModelTestStrategyOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeouts"></a>

```go
func Timeouts() AiLanguageModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference">AiLanguageModelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDataset"></a>

```go
func TrainingDataset() AiLanguageModelTrainingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference">AiLanguageModelTrainingDatasetOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModelDetailsInput`<sup>Optional</sup> <a name="ModelDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetailsInput"></a>

```go
func ModelDetailsInput() AiLanguageModelModelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TestStrategyInput`<sup>Optional</sup> <a name="TestStrategyInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategyInput"></a>

```go
func TestStrategyInput() AiLanguageModelTestStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrainingDatasetInput`<sup>Optional</sup> <a name="TrainingDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDatasetInput"></a>

```go
func TrainingDatasetInput() AiLanguageModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiLanguageModelConfig <a name="AiLanguageModelConfig" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ModelDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelModelDetails,
	ProjectId: *string,
	TrainingDataset: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTrainingDataset,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	TestStrategy: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTestStrategy,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.modelDetails">ModelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | model_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.testStrategy">TestStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | test_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}.

---

##### `ModelDetails`<sup>Required</sup> <a name="ModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.modelDetails"></a>

```go
ModelDetails AiLanguageModelModelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

model_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_details AiLanguageModel#model_details}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}.

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.trainingDataset"></a>

```go
TrainingDataset AiLanguageModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#training_dataset AiLanguageModel#training_dataset}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TestStrategy`<sup>Optional</sup> <a name="TestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.testStrategy"></a>

```go
TestStrategy AiLanguageModelTestStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

test_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#test_strategy AiLanguageModel#test_strategy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.timeouts"></a>

```go
Timeouts AiLanguageModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#timeouts AiLanguageModel#timeouts}

---

### AiLanguageModelEvaluationResults <a name="AiLanguageModelEvaluationResults" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelEvaluationResults {

}
```


### AiLanguageModelEvaluationResultsClassMetrics <a name="AiLanguageModelEvaluationResultsClassMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelEvaluationResultsClassMetrics {

}
```


### AiLanguageModelEvaluationResultsEntityMetrics <a name="AiLanguageModelEvaluationResultsEntityMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelEvaluationResultsEntityMetrics {

}
```


### AiLanguageModelEvaluationResultsMetrics <a name="AiLanguageModelEvaluationResultsMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelEvaluationResultsMetrics {

}
```


### AiLanguageModelModelDetails <a name="AiLanguageModelModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelModelDetails {
	ModelType: *string,
	ClassificationMode: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode,
	LanguageCode: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.modelType">ModelType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_type AiLanguageModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.classificationMode">ClassificationMode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | classification_mode block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#language_code AiLanguageModel#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}. |

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.modelType"></a>

```go
ModelType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_type AiLanguageModel#model_type}.

---

##### `ClassificationMode`<sup>Optional</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.classificationMode"></a>

```go
ClassificationMode AiLanguageModelModelDetailsClassificationMode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

classification_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#language_code AiLanguageModel#language_code}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}.

---

### AiLanguageModelModelDetailsClassificationMode <a name="AiLanguageModelModelDetailsClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelModelDetailsClassificationMode {
	ClassificationMode: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.classificationMode">ClassificationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}. |

---

##### `ClassificationMode`<sup>Required</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.classificationMode"></a>

```go
ClassificationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}.

---

### AiLanguageModelTestStrategy <a name="AiLanguageModelTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTestStrategy {
	StrategyType: *string,
	TestingDataset: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset,
	ValidationDataset: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.strategyType">StrategyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#strategy_type AiLanguageModel#strategy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.testingDataset">TestingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.validationDataset">ValidationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | validation_dataset block. |

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.strategyType"></a>

```go
StrategyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#strategy_type AiLanguageModel#strategy_type}.

---

##### `TestingDataset`<sup>Required</sup> <a name="TestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.testingDataset"></a>

```go
TestingDataset AiLanguageModelTestStrategyTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#testing_dataset AiLanguageModel#testing_dataset}

---

##### `ValidationDataset`<sup>Optional</sup> <a name="ValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.validationDataset"></a>

```go
ValidationDataset AiLanguageModelTestStrategyValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#validation_dataset AiLanguageModel#validation_dataset}

---

### AiLanguageModelTestStrategyTestingDataset <a name="AiLanguageModelTestStrategyTestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTestStrategyTestingDataset {
	DatasetType: *string,
	DatasetId: *string,
	LocationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | location_details block. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `LocationDetails`<sup>Optional</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.locationDetails"></a>

```go
LocationDetails AiLanguageModelTestStrategyTestingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTestStrategyTestingDatasetLocationDetails <a name="AiLanguageModelTestStrategyTestingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTestStrategyTestingDatasetLocationDetails {
	Bucket: *string,
	LocationType: *string,
	Namespace: *string,
	ObjectNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.locationType">LocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.locationType"></a>

```go
LocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.objectNames"></a>

```go
ObjectNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

### AiLanguageModelTestStrategyValidationDataset <a name="AiLanguageModelTestStrategyValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTestStrategyValidationDataset {
	DatasetType: *string,
	DatasetId: *string,
	LocationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | location_details block. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `LocationDetails`<sup>Optional</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.locationDetails"></a>

```go
LocationDetails AiLanguageModelTestStrategyValidationDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTestStrategyValidationDatasetLocationDetails <a name="AiLanguageModelTestStrategyValidationDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTestStrategyValidationDatasetLocationDetails {
	Bucket: *string,
	LocationType: *string,
	Namespace: *string,
	ObjectNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.locationType">LocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.locationType"></a>

```go
LocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.objectNames"></a>

```go
ObjectNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

### AiLanguageModelTimeouts <a name="AiLanguageModelTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#create AiLanguageModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#delete AiLanguageModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#update AiLanguageModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#create AiLanguageModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#delete AiLanguageModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#update AiLanguageModel#update}.

---

### AiLanguageModelTrainingDataset <a name="AiLanguageModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTrainingDataset {
	DatasetType: *string,
	DatasetId: *string,
	LocationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | location_details block. |

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `LocationDetails`<sup>Optional</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.locationDetails"></a>

```go
LocationDetails AiLanguageModelTrainingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTrainingDatasetLocationDetails <a name="AiLanguageModelTrainingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

&ailanguagemodel.AiLanguageModelTrainingDatasetLocationDetails {
	Bucket: *string,
	LocationType: *string,
	Namespace: *string,
	ObjectNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.locationType">LocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.locationType"></a>

```go
LocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.objectNames"></a>

```go
ObjectNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiLanguageModelEvaluationResultsClassMetricsList <a name="AiLanguageModelEvaluationResultsClassMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsClassMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiLanguageModelEvaluationResultsClassMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get"></a>

```go
func Get(index *f64) AiLanguageModelEvaluationResultsClassMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiLanguageModelEvaluationResultsClassMetricsOutputReference <a name="AiLanguageModelEvaluationResultsClassMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsClassMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiLanguageModelEvaluationResultsClassMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1">F1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision">Precision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall">Recall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support">Support</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics">AiLanguageModelEvaluationResultsClassMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `F1`<sup>Required</sup> <a name="F1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1"></a>

```go
func F1() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision"></a>

```go
func Precision() *f64
```

- *Type:* *f64

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall"></a>

```go
func Recall() *f64
```

- *Type:* *f64

---

##### `Support`<sup>Required</sup> <a name="Support" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support"></a>

```go
func Support() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelEvaluationResultsClassMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics">AiLanguageModelEvaluationResultsClassMetrics</a>

---


### AiLanguageModelEvaluationResultsEntityMetricsList <a name="AiLanguageModelEvaluationResultsEntityMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsEntityMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiLanguageModelEvaluationResultsEntityMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get"></a>

```go
func Get(index *f64) AiLanguageModelEvaluationResultsEntityMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiLanguageModelEvaluationResultsEntityMetricsOutputReference <a name="AiLanguageModelEvaluationResultsEntityMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsEntityMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiLanguageModelEvaluationResultsEntityMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1">F1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision">Precision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall">Recall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics">AiLanguageModelEvaluationResultsEntityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `F1`<sup>Required</sup> <a name="F1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1"></a>

```go
func F1() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision"></a>

```go
func Precision() *f64
```

- *Type:* *f64

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall"></a>

```go
func Recall() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelEvaluationResultsEntityMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics">AiLanguageModelEvaluationResultsEntityMetrics</a>

---


### AiLanguageModelEvaluationResultsList <a name="AiLanguageModelEvaluationResultsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiLanguageModelEvaluationResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get"></a>

```go
func Get(index *f64) AiLanguageModelEvaluationResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiLanguageModelEvaluationResultsMetricsList <a name="AiLanguageModelEvaluationResultsMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiLanguageModelEvaluationResultsMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get"></a>

```go
func Get(index *f64) AiLanguageModelEvaluationResultsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiLanguageModelEvaluationResultsMetricsOutputReference <a name="AiLanguageModelEvaluationResultsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiLanguageModelEvaluationResultsMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy">Accuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1">MacroF1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision">MacroPrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall">MacroRecall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1">MicroF1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision">MicroPrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall">MicroRecall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1">WeightedF1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision">WeightedPrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall">WeightedRecall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics">AiLanguageModelEvaluationResultsMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy"></a>

```go
func Accuracy() *f64
```

- *Type:* *f64

---

##### `MacroF1`<sup>Required</sup> <a name="MacroF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1"></a>

```go
func MacroF1() *f64
```

- *Type:* *f64

---

##### `MacroPrecision`<sup>Required</sup> <a name="MacroPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision"></a>

```go
func MacroPrecision() *f64
```

- *Type:* *f64

---

##### `MacroRecall`<sup>Required</sup> <a name="MacroRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall"></a>

```go
func MacroRecall() *f64
```

- *Type:* *f64

---

##### `MicroF1`<sup>Required</sup> <a name="MicroF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1"></a>

```go
func MicroF1() *f64
```

- *Type:* *f64

---

##### `MicroPrecision`<sup>Required</sup> <a name="MicroPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision"></a>

```go
func MicroPrecision() *f64
```

- *Type:* *f64

---

##### `MicroRecall`<sup>Required</sup> <a name="MicroRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall"></a>

```go
func MicroRecall() *f64
```

- *Type:* *f64

---

##### `WeightedF1`<sup>Required</sup> <a name="WeightedF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1"></a>

```go
func WeightedF1() *f64
```

- *Type:* *f64

---

##### `WeightedPrecision`<sup>Required</sup> <a name="WeightedPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision"></a>

```go
func WeightedPrecision() *f64
```

- *Type:* *f64

---

##### `WeightedRecall`<sup>Required</sup> <a name="WeightedRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall"></a>

```go
func WeightedRecall() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelEvaluationResultsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics">AiLanguageModelEvaluationResultsMetrics</a>

---


### AiLanguageModelEvaluationResultsOutputReference <a name="AiLanguageModelEvaluationResultsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelEvaluationResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiLanguageModelEvaluationResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.classMetrics">ClassMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList">AiLanguageModelEvaluationResultsClassMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix">ConfusionMatrix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.entityMetrics">EntityMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList">AiLanguageModelEvaluationResultsEntityMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList">AiLanguageModelEvaluationResultsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults">AiLanguageModelEvaluationResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassMetrics`<sup>Required</sup> <a name="ClassMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.classMetrics"></a>

```go
func ClassMetrics() AiLanguageModelEvaluationResultsClassMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList">AiLanguageModelEvaluationResultsClassMetricsList</a>

---

##### `ConfusionMatrix`<sup>Required</sup> <a name="ConfusionMatrix" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix"></a>

```go
func ConfusionMatrix() *string
```

- *Type:* *string

---

##### `EntityMetrics`<sup>Required</sup> <a name="EntityMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.entityMetrics"></a>

```go
func EntityMetrics() AiLanguageModelEvaluationResultsEntityMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList">AiLanguageModelEvaluationResultsEntityMetricsList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.metrics"></a>

```go
func Metrics() AiLanguageModelEvaluationResultsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList">AiLanguageModelEvaluationResultsMetricsList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelEvaluationResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults">AiLanguageModelEvaluationResults</a>

---


### AiLanguageModelModelDetailsClassificationModeOutputReference <a name="AiLanguageModelModelDetailsClassificationModeOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelModelDetailsClassificationModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelModelDetailsClassificationModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationModeInput">ClassificationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode">ClassificationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationModeInput`<sup>Optional</sup> <a name="ClassificationModeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationModeInput"></a>

```go
func ClassificationModeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ClassificationMode`<sup>Required</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode"></a>

```go
func ClassificationMode() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelModelDetailsClassificationMode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---


### AiLanguageModelModelDetailsOutputReference <a name="AiLanguageModelModelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelModelDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelModelDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode">PutClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetClassificationMode">ResetClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClassificationMode` <a name="PutClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode"></a>

```go
func PutClassificationMode(value AiLanguageModelModelDetailsClassificationMode)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---

##### `ResetClassificationMode` <a name="ResetClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetClassificationMode"></a>

```go
func ResetClassificationMode()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationMode">ClassificationMode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference">AiLanguageModelModelDetailsClassificationModeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationModeInput">ClassificationModeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelTypeInput">ModelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationMode`<sup>Required</sup> <a name="ClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationMode"></a>

```go
func ClassificationMode() AiLanguageModelModelDetailsClassificationModeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference">AiLanguageModelModelDetailsClassificationModeOutputReference</a>

---

##### `ClassificationModeInput`<sup>Optional</sup> <a name="ClassificationModeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationModeInput"></a>

```go
func ClassificationModeInput() AiLanguageModelModelDetailsClassificationMode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ModelTypeInput`<sup>Optional</sup> <a name="ModelTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelTypeInput"></a>

```go
func ModelTypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelModelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---


### AiLanguageModelTestStrategyOutputReference <a name="AiLanguageModelTestStrategyOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTestStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTestStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset">PutTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset">PutValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resetValidationDataset">ResetValidationDataset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTestingDataset` <a name="PutTestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset"></a>

```go
func PutTestingDataset(value AiLanguageModelTestStrategyTestingDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---

##### `PutValidationDataset` <a name="PutValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset"></a>

```go
func PutValidationDataset(value AiLanguageModelTestStrategyValidationDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---

##### `ResetValidationDataset` <a name="ResetValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resetValidationDataset"></a>

```go
func ResetValidationDataset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDataset">TestingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference">AiLanguageModelTestStrategyTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDataset">ValidationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference">AiLanguageModelTestStrategyValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDatasetInput">TestingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDatasetInput">ValidationDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TestingDataset`<sup>Required</sup> <a name="TestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDataset"></a>

```go
func TestingDataset() AiLanguageModelTestStrategyTestingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference">AiLanguageModelTestStrategyTestingDatasetOutputReference</a>

---

##### `ValidationDataset`<sup>Required</sup> <a name="ValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDataset"></a>

```go
func ValidationDataset() AiLanguageModelTestStrategyValidationDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference">AiLanguageModelTestStrategyValidationDatasetOutputReference</a>

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyTypeInput"></a>

```go
func StrategyTypeInput() *string
```

- *Type:* *string

---

##### `TestingDatasetInput`<sup>Optional</sup> <a name="TestingDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDatasetInput"></a>

```go
func TestingDatasetInput() AiLanguageModelTestStrategyTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---

##### `ValidationDatasetInput`<sup>Optional</sup> <a name="ValidationDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDatasetInput"></a>

```go
func ValidationDatasetInput() AiLanguageModelTestStrategyValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTestStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---


### AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference <a name="AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationTypeInput">LocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNamesInput">ObjectNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```go
func LocationTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectNamesInput`<sup>Optional</sup> <a name="ObjectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```go
func ObjectNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType"></a>

```go
func LocationType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```go
func ObjectNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTestStrategyTestingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---


### AiLanguageModelTestStrategyTestingDatasetOutputReference <a name="AiLanguageModelTestStrategyTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTestStrategyTestingDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTestStrategyTestingDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails">PutLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetLocationDetails">ResetLocationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationDetails` <a name="PutLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails"></a>

```go
func PutLocationDetails(value AiLanguageModelTestStrategyTestingDatasetLocationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetLocationDetails` <a name="ResetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetLocationDetails"></a>

```go
func ResetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetailsInput">LocationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails"></a>

```go
func LocationDetails() AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `LocationDetailsInput`<sup>Optional</sup> <a name="LocationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetailsInput"></a>

```go
func LocationDetailsInput() AiLanguageModelTestStrategyTestingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTestStrategyTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---


### AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference <a name="AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationTypeInput">LocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNamesInput">ObjectNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```go
func LocationTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectNamesInput`<sup>Optional</sup> <a name="ObjectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```go
func ObjectNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType"></a>

```go
func LocationType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames"></a>

```go
func ObjectNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTestStrategyValidationDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---


### AiLanguageModelTestStrategyValidationDatasetOutputReference <a name="AiLanguageModelTestStrategyValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTestStrategyValidationDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTestStrategyValidationDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails">PutLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetLocationDetails">ResetLocationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationDetails` <a name="PutLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails"></a>

```go
func PutLocationDetails(value AiLanguageModelTestStrategyValidationDatasetLocationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetLocationDetails` <a name="ResetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetLocationDetails"></a>

```go
func ResetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetailsInput">LocationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails"></a>

```go
func LocationDetails() AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `LocationDetailsInput`<sup>Optional</sup> <a name="LocationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetailsInput"></a>

```go
func LocationDetailsInput() AiLanguageModelTestStrategyValidationDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTestStrategyValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---


### AiLanguageModelTimeoutsOutputReference <a name="AiLanguageModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiLanguageModelTrainingDatasetLocationDetailsOutputReference <a name="AiLanguageModelTrainingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTrainingDatasetLocationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTrainingDatasetLocationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationTypeInput">LocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNamesInput">ObjectNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType">LocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames">ObjectNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```go
func LocationTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectNamesInput`<sup>Optional</sup> <a name="ObjectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```go
func ObjectNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType"></a>

```go
func LocationType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectNames`<sup>Required</sup> <a name="ObjectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```go
func ObjectNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTrainingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---


### AiLanguageModelTrainingDatasetOutputReference <a name="AiLanguageModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ailanguagemodel"

ailanguagemodel.NewAiLanguageModelTrainingDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiLanguageModelTrainingDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails">PutLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetLocationDetails">ResetLocationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationDetails` <a name="PutLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails"></a>

```go
func PutLocationDetails(value AiLanguageModelTrainingDatasetLocationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---

##### `ResetDatasetId` <a name="ResetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetLocationDetails` <a name="ResetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetLocationDetails"></a>

```go
func ResetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetails">LocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference">AiLanguageModelTrainingDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetailsInput">LocationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationDetails`<sup>Required</sup> <a name="LocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetails"></a>

```go
func LocationDetails() AiLanguageModelTrainingDatasetLocationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference">AiLanguageModelTrainingDatasetLocationDetailsOutputReference</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `LocationDetailsInput`<sup>Optional</sup> <a name="LocationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetailsInput"></a>

```go
func LocationDetailsInput() AiLanguageModelTrainingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() AiLanguageModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---



