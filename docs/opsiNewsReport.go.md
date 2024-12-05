# `opsiNewsReport` Submodule <a name="`opsiNewsReport` Submodule" id="rhizo-co-terraform-provider-oci.opsiNewsReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiNewsReport <a name="OpsiNewsReport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report oci_opsi_news_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.NewOpsiNewsReport(scope Construct, id *string, config OpsiNewsReportConfig) OpsiNewsReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig">OpsiNewsReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig">OpsiNewsReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes">PutContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded">ResetAreChildCompartmentsIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentTypes` <a name="PutContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes"></a>

```go
func PutContentTypes(value OpsiNewsReportContentTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts"></a>

```go
func PutTimeouts(value OpsiNewsReportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---

##### `ResetAreChildCompartmentsIncluded` <a name="ResetAreChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded"></a>

```go
func ResetAreChildCompartmentsIncluded()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek"></a>

```go
func ResetDayOfWeek()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.OpsiNewsReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.OpsiNewsReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.OpsiNewsReport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.OpsiNewsReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiNewsReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiNewsReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiNewsReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes">ContentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput">AreChildCompartmentsIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput">ContentTypesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput">NewsFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput">OnsTopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded">AreChildCompartmentsIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency">NewsFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId">OnsTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes"></a>

```go
func ContentTypes() OpsiNewsReportContentTypesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts"></a>

```go
func Timeouts() OpsiNewsReportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AreChildCompartmentsIncludedInput`<sup>Optional</sup> <a name="AreChildCompartmentsIncludedInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput"></a>

```go
func AreChildCompartmentsIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ContentTypesInput`<sup>Optional</sup> <a name="ContentTypesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput"></a>

```go
func ContentTypesInput() OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewsFrequencyInput`<sup>Optional</sup> <a name="NewsFrequencyInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput"></a>

```go
func NewsFrequencyInput() *string
```

- *Type:* *string

---

##### `OnsTopicIdInput`<sup>Optional</sup> <a name="OnsTopicIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput"></a>

```go
func OnsTopicIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AreChildCompartmentsIncluded`<sup>Required</sup> <a name="AreChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded"></a>

```go
func AreChildCompartmentsIncluded() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewsFrequency`<sup>Required</sup> <a name="NewsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency"></a>

```go
func NewsFrequency() *string
```

- *Type:* *string

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId"></a>

```go
func OnsTopicId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiNewsReportConfig <a name="OpsiNewsReportConfig" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

&opsinewsreport.OpsiNewsReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ContentTypes: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiNewsReport.OpsiNewsReportContentTypes,
	Description: *string,
	Locale: *string,
	Name: *string,
	NewsFrequency: *string,
	OnsTopicId: *string,
	AreChildCompartmentsIncluded: interface{},
	DayOfWeek: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiNewsReport.OpsiNewsReportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes">ContentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency">NewsFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId">OnsTopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded">AreChildCompartmentsIncluded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes"></a>

```go
ContentTypes OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `NewsFrequency`<sup>Required</sup> <a name="NewsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency"></a>

```go
NewsFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId"></a>

```go
OnsTopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `AreChildCompartmentsIncluded`<sup>Optional</sup> <a name="AreChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded"></a>

```go
AreChildCompartmentsIncluded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts"></a>

```go
Timeouts OpsiNewsReportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

### OpsiNewsReportContentTypes <a name="OpsiNewsReportContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

&opsinewsreport.OpsiNewsReportContentTypes {
	CapacityPlanningResources: *[]*string,
	SqlInsightsFleetAnalysisResources: *[]*string,
	SqlInsightsPerformanceDegradationResources: *[]*string,
	SqlInsightsPlanChangesResources: *[]*string,
	SqlInsightsTopDatabasesResources: *[]*string,
	SqlInsightsTopSqlByInsightsResources: *[]*string,
	SqlInsightsTopSqlResources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources">CapacityPlanningResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources">SqlInsightsFleetAnalysisResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources">SqlInsightsPerformanceDegradationResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources">SqlInsightsPlanChangesResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources">SqlInsightsTopDatabasesResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources">SqlInsightsTopSqlByInsightsResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources">SqlInsightsTopSqlResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}. |

---

##### `CapacityPlanningResources`<sup>Optional</sup> <a name="CapacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources"></a>

```go
CapacityPlanningResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}.

---

##### `SqlInsightsFleetAnalysisResources`<sup>Optional</sup> <a name="SqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources"></a>

```go
SqlInsightsFleetAnalysisResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}.

---

##### `SqlInsightsPerformanceDegradationResources`<sup>Optional</sup> <a name="SqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources"></a>

```go
SqlInsightsPerformanceDegradationResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}.

---

##### `SqlInsightsPlanChangesResources`<sup>Optional</sup> <a name="SqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources"></a>

```go
SqlInsightsPlanChangesResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}.

---

##### `SqlInsightsTopDatabasesResources`<sup>Optional</sup> <a name="SqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources"></a>

```go
SqlInsightsTopDatabasesResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}.

---

##### `SqlInsightsTopSqlByInsightsResources`<sup>Optional</sup> <a name="SqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources"></a>

```go
SqlInsightsTopSqlByInsightsResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}.

---

##### `SqlInsightsTopSqlResources`<sup>Optional</sup> <a name="SqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources"></a>

```go
SqlInsightsTopSqlResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}.

---

### OpsiNewsReportTimeouts <a name="OpsiNewsReportTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

&opsinewsreport.OpsiNewsReportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiNewsReportContentTypesOutputReference <a name="OpsiNewsReportContentTypesOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.NewOpsiNewsReportContentTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiNewsReportContentTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources">ResetCapacityPlanningResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources">ResetSqlInsightsFleetAnalysisResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources">ResetSqlInsightsPerformanceDegradationResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources">ResetSqlInsightsPlanChangesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources">ResetSqlInsightsTopDatabasesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources">ResetSqlInsightsTopSqlByInsightsResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources">ResetSqlInsightsTopSqlResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityPlanningResources` <a name="ResetCapacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources"></a>

```go
func ResetCapacityPlanningResources()
```

##### `ResetSqlInsightsFleetAnalysisResources` <a name="ResetSqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources"></a>

```go
func ResetSqlInsightsFleetAnalysisResources()
```

##### `ResetSqlInsightsPerformanceDegradationResources` <a name="ResetSqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources"></a>

```go
func ResetSqlInsightsPerformanceDegradationResources()
```

##### `ResetSqlInsightsPlanChangesResources` <a name="ResetSqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources"></a>

```go
func ResetSqlInsightsPlanChangesResources()
```

##### `ResetSqlInsightsTopDatabasesResources` <a name="ResetSqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources"></a>

```go
func ResetSqlInsightsTopDatabasesResources()
```

##### `ResetSqlInsightsTopSqlByInsightsResources` <a name="ResetSqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources"></a>

```go
func ResetSqlInsightsTopSqlByInsightsResources()
```

##### `ResetSqlInsightsTopSqlResources` <a name="ResetSqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources"></a>

```go
func ResetSqlInsightsTopSqlResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput">CapacityPlanningResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput">SqlInsightsFleetAnalysisResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput">SqlInsightsPerformanceDegradationResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput">SqlInsightsPlanChangesResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput">SqlInsightsTopDatabasesResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput">SqlInsightsTopSqlByInsightsResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput">SqlInsightsTopSqlResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources">CapacityPlanningResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources">SqlInsightsFleetAnalysisResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources">SqlInsightsPerformanceDegradationResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources">SqlInsightsPlanChangesResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources">SqlInsightsTopDatabasesResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources">SqlInsightsTopSqlByInsightsResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources">SqlInsightsTopSqlResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityPlanningResourcesInput`<sup>Optional</sup> <a name="CapacityPlanningResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput"></a>

```go
func CapacityPlanningResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsFleetAnalysisResourcesInput`<sup>Optional</sup> <a name="SqlInsightsFleetAnalysisResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput"></a>

```go
func SqlInsightsFleetAnalysisResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsPerformanceDegradationResourcesInput`<sup>Optional</sup> <a name="SqlInsightsPerformanceDegradationResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput"></a>

```go
func SqlInsightsPerformanceDegradationResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsPlanChangesResourcesInput`<sup>Optional</sup> <a name="SqlInsightsPlanChangesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput"></a>

```go
func SqlInsightsPlanChangesResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopDatabasesResourcesInput`<sup>Optional</sup> <a name="SqlInsightsTopDatabasesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput"></a>

```go
func SqlInsightsTopDatabasesResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopSqlByInsightsResourcesInput`<sup>Optional</sup> <a name="SqlInsightsTopSqlByInsightsResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput"></a>

```go
func SqlInsightsTopSqlByInsightsResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopSqlResourcesInput`<sup>Optional</sup> <a name="SqlInsightsTopSqlResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput"></a>

```go
func SqlInsightsTopSqlResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityPlanningResources`<sup>Required</sup> <a name="CapacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources"></a>

```go
func CapacityPlanningResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsFleetAnalysisResources`<sup>Required</sup> <a name="SqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources"></a>

```go
func SqlInsightsFleetAnalysisResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsPerformanceDegradationResources`<sup>Required</sup> <a name="SqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources"></a>

```go
func SqlInsightsPerformanceDegradationResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsPlanChangesResources`<sup>Required</sup> <a name="SqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources"></a>

```go
func SqlInsightsPlanChangesResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopDatabasesResources`<sup>Required</sup> <a name="SqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources"></a>

```go
func SqlInsightsTopDatabasesResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopSqlByInsightsResources`<sup>Required</sup> <a name="SqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources"></a>

```go
func SqlInsightsTopSqlByInsightsResources() *[]*string
```

- *Type:* *[]*string

---

##### `SqlInsightsTopSqlResources`<sup>Required</sup> <a name="SqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources"></a>

```go
func SqlInsightsTopSqlResources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---


### OpsiNewsReportTimeoutsOutputReference <a name="OpsiNewsReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsinewsreport"

opsinewsreport.NewOpsiNewsReportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiNewsReportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



