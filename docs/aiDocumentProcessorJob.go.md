# `aiDocumentProcessorJob` Submodule <a name="`aiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessorJob <a name="AiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJob(scope Construct, id *string, config AiDocumentProcessorJobConfig) AiDocumentProcessorJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation">PutInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig">PutProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputLocation` <a name="PutInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation"></a>

```go
func PutInputLocation(value AiDocumentProcessorJobInputLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation"></a>

```go
func PutOutputLocation(value AiDocumentProcessorJobOutputLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `PutProcessorConfig` <a name="PutProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig"></a>

```go
func PutProcessorConfig(value AiDocumentProcessorJobProcessorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts"></a>

```go
func PutTimeouts(value AiDocumentProcessorJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.AiDocumentProcessorJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.AiDocumentProcessorJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.AiDocumentProcessorJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.AiDocumentProcessorJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiDocumentProcessorJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation">InputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation">OutputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete">PercentComplete</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig">ProcessorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput">InputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput">OutputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput">ProcessorConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation"></a>

```go
func InputLocation() AiDocumentProcessorJobInputLocationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation"></a>

```go
func OutputLocation() AiDocumentProcessorJobOutputLocationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a>

---

##### `PercentComplete`<sup>Required</sup> <a name="PercentComplete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete"></a>

```go
func PercentComplete() *f64
```

- *Type:* *f64

---

##### `ProcessorConfig`<sup>Required</sup> <a name="ProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig"></a>

```go
func ProcessorConfig() AiDocumentProcessorJobProcessorConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts"></a>

```go
func Timeouts() AiDocumentProcessorJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputLocationInput`<sup>Optional</sup> <a name="InputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput"></a>

```go
func InputLocationInput() AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput"></a>

```go
func OutputLocationInput() AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `ProcessorConfigInput`<sup>Optional</sup> <a name="ProcessorConfigInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput"></a>

```go
func ProcessorConfigInput() AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorJobConfig <a name="AiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	InputLocation: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation,
	OutputLocation: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation,
	ProcessorConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation">InputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig">ProcessorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation"></a>

```go
InputLocation AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation"></a>

```go
OutputLocation AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `ProcessorConfig`<sup>Required</sup> <a name="ProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig"></a>

```go
ProcessorConfig AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts"></a>

```go
Timeouts AiDocumentProcessorJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

### AiDocumentProcessorJobInputLocation <a name="AiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobInputLocation {
	SourceType: *string,
	Data: *string,
	ObjectLocations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations">ObjectLocations</a></code> | <code>interface{}</code> | object_locations block. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

##### `ObjectLocations`<sup>Optional</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations"></a>

```go
ObjectLocations interface{}
```

- *Type:* interface{}

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

### AiDocumentProcessorJobInputLocationObjectLocations <a name="AiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobInputLocationObjectLocations {
	Bucket: *string,
	Namespace: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}.

---

### AiDocumentProcessorJobOutputLocation <a name="AiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobOutputLocation {
	Bucket: *string,
	Namespace: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

### AiDocumentProcessorJobProcessorConfig <a name="AiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobProcessorConfig {
	Features: interface{},
	ProcessorType: *string,
	DocumentType: *string,
	IsZipOutputEnabled: interface{},
	Language: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType">ProcessorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType">DocumentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled">IsZipOutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}. |

---

##### `Features`<sup>Required</sup> <a name="Features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType"></a>

```go
ProcessorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType"></a>

```go
DocumentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

##### `IsZipOutputEnabled`<sup>Optional</sup> <a name="IsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled"></a>

```go
IsZipOutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

### AiDocumentProcessorJobProcessorConfigFeatures <a name="AiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobProcessorConfigFeatures {
	FeatureType: *string,
	GenerateSearchablePdf: interface{},
	MaxResults: *f64,
	ModelId: *string,
	TenancyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType">FeatureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf">GenerateSearchablePdf</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults">MaxResults</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}. |

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType"></a>

```go
FeatureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}.

---

##### `GenerateSearchablePdf`<sup>Optional</sup> <a name="GenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf"></a>

```go
GenerateSearchablePdf interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}.

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults"></a>

```go
MaxResults *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}.

---

##### `TenancyId`<sup>Optional</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}.

---

### AiDocumentProcessorJobTimeouts <a name="AiDocumentProcessorJobTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

&aidocumentprocessorjob.AiDocumentProcessorJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentProcessorJobInputLocationObjectLocationsList <a name="AiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobInputLocationObjectLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiDocumentProcessorJobInputLocationObjectLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```go
func Get(index *f64) AiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="AiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobInputLocationObjectLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiDocumentProcessorJobInputLocationOutputReference <a name="AiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobInputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiDocumentProcessorJobInputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations">PutObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations">ResetObjectLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectLocations` <a name="PutObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations"></a>

```go
func PutObjectLocations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetObjectLocations` <a name="ResetObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations"></a>

```go
func ResetObjectLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput">ObjectLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```go
func ObjectLocations() AiDocumentProcessorJobInputLocationObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `ObjectLocationsInput`<sup>Optional</sup> <a name="ObjectLocationsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput"></a>

```go
func ObjectLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---


### AiDocumentProcessorJobOutputLocationOutputReference <a name="AiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiDocumentProcessorJobOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---


### AiDocumentProcessorJobProcessorConfigFeaturesList <a name="AiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobProcessorConfigFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiDocumentProcessorJobProcessorConfigFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```go
func Get(index *f64) AiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="AiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobProcessorConfigFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf">ResetGenerateSearchablePdf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults">ResetMaxResults</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId">ResetTenancyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGenerateSearchablePdf` <a name="ResetGenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf"></a>

```go
func ResetGenerateSearchablePdf()
```

##### `ResetMaxResults` <a name="ResetMaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults"></a>

```go
func ResetMaxResults()
```

##### `ResetModelId` <a name="ResetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetTenancyId` <a name="ResetTenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId"></a>

```go
func ResetTenancyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput">GenerateSearchablePdfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput">MaxResultsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">FeatureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">GenerateSearchablePdf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">MaxResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput"></a>

```go
func FeatureTypeInput() *string
```

- *Type:* *string

---

##### `GenerateSearchablePdfInput`<sup>Optional</sup> <a name="GenerateSearchablePdfInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput"></a>

```go
func GenerateSearchablePdfInput() interface{}
```

- *Type:* interface{}

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput"></a>

```go
func MaxResultsInput() *f64
```

- *Type:* *f64

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```go
func FeatureType() *string
```

- *Type:* *string

---

##### `GenerateSearchablePdf`<sup>Required</sup> <a name="GenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```go
func GenerateSearchablePdf() interface{}
```

- *Type:* interface{}

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```go
func MaxResults() *f64
```

- *Type:* *f64

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiDocumentProcessorJobProcessorConfigOutputReference <a name="AiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobProcessorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiDocumentProcessorJobProcessorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled">ResetIsZipOutputEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatures` <a name="PutFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures"></a>

```go
func PutFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDocumentType` <a name="ResetDocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType"></a>

```go
func ResetDocumentType()
```

##### `ResetIsZipOutputEnabled` <a name="ResetIsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled"></a>

```go
func ResetIsZipOutputEnabled()
```

##### `ResetLanguage` <a name="ResetLanguage" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage"></a>

```go
func ResetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features">Features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput">IsZipOutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">DocumentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">IsZipOutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">ProcessorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```go
func Features() AiDocumentProcessorJobProcessorConfigFeaturesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput"></a>

```go
func DocumentTypeInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `IsZipOutputEnabledInput`<sup>Optional</sup> <a name="IsZipOutputEnabledInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput"></a>

```go
func IsZipOutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput"></a>

```go
func ProcessorTypeInput() *string
```

- *Type:* *string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```go
func DocumentType() *string
```

- *Type:* *string

---

##### `IsZipOutputEnabled`<sup>Required</sup> <a name="IsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```go
func IsZipOutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```go
func ProcessorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---


### AiDocumentProcessorJobTimeoutsOutputReference <a name="AiDocumentProcessorJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aidocumentprocessorjob"

aidocumentprocessorjob.NewAiDocumentProcessorJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiDocumentProcessorJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



