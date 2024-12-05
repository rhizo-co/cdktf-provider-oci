# `aiAnomalyDetectionModel` Submodule <a name="`aiAnomalyDetectionModel` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionModel <a name="AiAnomalyDetectionModel" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModel(scope Construct, id *string, config AiAnomalyDetectionModelConfig) AiAnomalyDetectionModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig">AiAnomalyDetectionModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig">AiAnomalyDetectionModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails">PutModelTrainingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModelTrainingDetails` <a name="PutModelTrainingDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails"></a>

```go
func PutModelTrainingDetails(value AiAnomalyDetectionModelModelTrainingDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts"></a>

```go
func PutTimeouts(value AiAnomalyDetectionModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.AiAnomalyDetectionModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.AiAnomalyDetectionModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.AiAnomalyDetectionModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.AiAnomalyDetectionModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiAnomalyDetectionModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiAnomalyDetectionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetails">ModelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference">AiAnomalyDetectionModelModelTrainingDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingResults">ModelTrainingResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList">AiAnomalyDetectionModelModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference">AiAnomalyDetectionModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetailsInput">ModelTrainingDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ModelTrainingDetails`<sup>Required</sup> <a name="ModelTrainingDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetails"></a>

```go
func ModelTrainingDetails() AiAnomalyDetectionModelModelTrainingDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference">AiAnomalyDetectionModelModelTrainingDetailsOutputReference</a>

---

##### `ModelTrainingResults`<sup>Required</sup> <a name="ModelTrainingResults" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingResults"></a>

```go
func ModelTrainingResults() AiAnomalyDetectionModelModelTrainingResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList">AiAnomalyDetectionModelModelTrainingResultsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeouts"></a>

```go
func Timeouts() AiAnomalyDetectionModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference">AiAnomalyDetectionModelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModelTrainingDetailsInput`<sup>Optional</sup> <a name="ModelTrainingDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetailsInput"></a>

```go
func ModelTrainingDetailsInput() AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionModelConfig <a name="AiAnomalyDetectionModelConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ModelTrainingDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails,
	ProjectId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.modelTrainingDetails">ModelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | model_training_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}.

---

##### `ModelTrainingDetails`<sup>Required</sup> <a name="ModelTrainingDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.modelTrainingDetails"></a>

```go
ModelTrainingDetails AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

model_training_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#model_training_details AiAnomalyDetectionModel#model_training_details}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.timeouts"></a>

```go
Timeouts AiAnomalyDetectionModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#timeouts AiAnomalyDetectionModel#timeouts}

---

### AiAnomalyDetectionModelModelTrainingDetails <a name="AiAnomalyDetectionModelModelTrainingDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelModelTrainingDetails {
	DataAssetIds: *[]*string,
	AlgorithmHint: *string,
	TargetFap: *f64,
	TrainingFraction: *f64,
	WindowSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.dataAssetIds">DataAssetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.algorithmHint">AlgorithmHint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.targetFap">TargetFap</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.windowSize">WindowSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}. |

---

##### `DataAssetIds`<sup>Required</sup> <a name="DataAssetIds" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.dataAssetIds"></a>

```go
DataAssetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}.

---

##### `AlgorithmHint`<sup>Optional</sup> <a name="AlgorithmHint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.algorithmHint"></a>

```go
AlgorithmHint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}.

---

##### `TargetFap`<sup>Optional</sup> <a name="TargetFap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.targetFap"></a>

```go
TargetFap *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}.

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.trainingFraction"></a>

```go
TrainingFraction *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}.

---

##### `WindowSize`<sup>Optional</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.windowSize"></a>

```go
WindowSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}.

---

### AiAnomalyDetectionModelModelTrainingResults <a name="AiAnomalyDetectionModelModelTrainingResults" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelModelTrainingResults {

}
```


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails {

}
```


### AiAnomalyDetectionModelModelTrainingResultsSignalDetails <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails {

}
```


### AiAnomalyDetectionModelTimeouts <a name="AiAnomalyDetectionModelTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

&aianomalydetectionmodel.AiAnomalyDetectionModelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionModelModelTrainingDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionModelModelTrainingDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetAlgorithmHint">ResetAlgorithmHint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTargetFap">ResetTargetFap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetWindowSize">ResetWindowSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithmHint` <a name="ResetAlgorithmHint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetAlgorithmHint"></a>

```go
func ResetAlgorithmHint()
```

##### `ResetTargetFap` <a name="ResetTargetFap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTargetFap"></a>

```go
func ResetTargetFap()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTrainingFraction"></a>

```go
func ResetTrainingFraction()
```

##### `ResetWindowSize` <a name="ResetWindowSize" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetWindowSize"></a>

```go
func ResetWindowSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHintInput">AlgorithmHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIdsInput">DataAssetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFapInput">TargetFapInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSizeInput">WindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint">AlgorithmHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds">DataAssetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap">TargetFap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize">WindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmHintInput`<sup>Optional</sup> <a name="AlgorithmHintInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHintInput"></a>

```go
func AlgorithmHintInput() *string
```

- *Type:* *string

---

##### `DataAssetIdsInput`<sup>Optional</sup> <a name="DataAssetIdsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIdsInput"></a>

```go
func DataAssetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetFapInput`<sup>Optional</sup> <a name="TargetFapInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFapInput"></a>

```go
func TargetFapInput() *f64
```

- *Type:* *f64

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFractionInput"></a>

```go
func TrainingFractionInput() *f64
```

- *Type:* *f64

---

##### `WindowSizeInput`<sup>Optional</sup> <a name="WindowSizeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSizeInput"></a>

```go
func WindowSizeInput() *f64
```

- *Type:* *f64

---

##### `AlgorithmHint`<sup>Required</sup> <a name="AlgorithmHint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```go
func AlgorithmHint() *string
```

- *Type:* *string

---

##### `DataAssetIds`<sup>Required</sup> <a name="DataAssetIds" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```go
func DataAssetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetFap`<sup>Required</sup> <a name="TargetFap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap"></a>

```go
func TargetFap() *f64
```

- *Type:* *f64

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```go
func TrainingFraction() *f64
```

- *Type:* *f64

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize"></a>

```go
func WindowSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

---


### AiAnomalyDetectionModelModelTrainingResultsList <a name="AiAnomalyDetectionModelModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiAnomalyDetectionModelModelTrainingResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get"></a>

```go
func Get(index *f64) AiAnomalyDetectionModelModelTrainingResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiAnomalyDetectionModelModelTrainingResultsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiAnomalyDetectionModelModelTrainingResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap">Fap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">IsTrainingGoalAchieved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae">Mae</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows">MaxInferenceSyncRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap">MultivariateFap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse">Rmse</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails">RowReductionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails">SignalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize">WindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults">AiAnomalyDetectionModelModelTrainingResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap"></a>

```go
func Fap() *f64
```

- *Type:* *f64

---

##### `IsTrainingGoalAchieved`<sup>Required</sup> <a name="IsTrainingGoalAchieved" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```go
func IsTrainingGoalAchieved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mae`<sup>Required</sup> <a name="Mae" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae"></a>

```go
func Mae() *f64
```

- *Type:* *f64

---

##### `MaxInferenceSyncRows`<sup>Required</sup> <a name="MaxInferenceSyncRows" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```go
func MaxInferenceSyncRows() *f64
```

- *Type:* *f64

---

##### `MultivariateFap`<sup>Required</sup> <a name="MultivariateFap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap"></a>

```go
func MultivariateFap() *f64
```

- *Type:* *f64

---

##### `Rmse`<sup>Required</sup> <a name="Rmse" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse"></a>

```go
func Rmse() *f64
```

- *Type:* *f64

---

##### `RowReductionDetails`<sup>Required</sup> <a name="RowReductionDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```go
func RowReductionDetails() AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a>

---

##### `SignalDetails`<sup>Required</sup> <a name="SignalDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails"></a>

```go
func SignalDetails() AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize"></a>

```go
func WindowSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionModelModelTrainingResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults">AiAnomalyDetectionModelModelTrainingResults</a>

---


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get"></a>

```go
func Get(index *f64) AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">IsReductionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">ReductionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">ReductionPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReductionEnabled`<sup>Required</sup> <a name="IsReductionEnabled" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```go
func IsReductionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReductionMethod`<sup>Required</sup> <a name="ReductionMethod" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```go
func ReductionMethod() *string
```

- *Type:* *string

---

##### `ReductionPercentage`<sup>Required</sup> <a name="ReductionPercentage" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```go
func ReductionPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a>

---


### AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get"></a>

```go
func Get(index *f64) AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap">Fap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">IsQuantized</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">MviRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName">SignalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std">Std</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails">AiAnomalyDetectionModelModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```go
func Fap() *f64
```

- *Type:* *f64

---

##### `IsQuantized`<sup>Required</sup> <a name="IsQuantized" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```go
func IsQuantized() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `MviRatio`<sup>Required</sup> <a name="MviRatio" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```go
func MviRatio() *f64
```

- *Type:* *f64

---

##### `SignalName`<sup>Required</sup> <a name="SignalName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```go
func SignalName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Std`<sup>Required</sup> <a name="Std" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```go
func Std() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionModelModelTrainingResultsSignalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails">AiAnomalyDetectionModelModelTrainingResultsSignalDetails</a>

---


### AiAnomalyDetectionModelTimeoutsOutputReference <a name="AiAnomalyDetectionModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectionmodel"

aianomalydetectionmodel.NewAiAnomalyDetectionModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



