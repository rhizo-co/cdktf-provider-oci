# `dataSafeUnsetSecurityAssessmentBaseline` Submodule <a name="`dataSafeUnsetSecurityAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeUnsetSecurityAssessmentBaseline <a name="DataSafeUnsetSecurityAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline oci_data_safe_unset_security_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.NewDataSafeUnsetSecurityAssessmentBaseline(scope Construct, id *string, config DataSafeUnsetSecurityAssessmentBaselineConfig) DataSafeUnsetSecurityAssessmentBaseline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig">DataSafeUnsetSecurityAssessmentBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig">DataSafeUnsetSecurityAssessmentBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds">ResetTargetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeUnsetSecurityAssessmentBaselineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId"></a>

```go
func ResetId()
```

##### `ResetTargetIds` <a name="ResetTargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds"></a>

```go
func ResetTargetIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaseline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaseline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaseline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaseline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeUnsetSecurityAssessmentBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeUnsetSecurityAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeUnsetSecurityAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput">TargetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts"></a>

```go
func Timeouts() DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput"></a>

```go
func SecurityAssessmentIdInput() *string
```

- *Type:* *string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput"></a>

```go
func TargetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId"></a>

```go
func SecurityAssessmentId() *string
```

- *Type:* *string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeUnsetSecurityAssessmentBaselineConfig <a name="DataSafeUnsetSecurityAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

&datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaselineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityAssessmentId: *string,
	Id: *string,
	TargetIds: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId"></a>

```go
SecurityAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetIds`<sup>Optional</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds"></a>

```go
TargetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts"></a>

```go
Timeouts DataSafeUnsetSecurityAssessmentBaselineTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#timeouts DataSafeUnsetSecurityAssessmentBaseline#timeouts}

---

### DataSafeUnsetSecurityAssessmentBaselineTimeouts <a name="DataSafeUnsetSecurityAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

&datasafeunsetsecurityassessmentbaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference <a name="DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaseline"

datasafeunsetsecurityassessmentbaseline.NewDataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



