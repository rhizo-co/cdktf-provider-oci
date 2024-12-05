# `dataOciDataSafeSecurityAssessments` Submodule <a name="`dataOciDataSafeSecurityAssessments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessments <a name="DataOciDataSafeSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessments(scope Construct, id *string, config DataOciDataSafeSecurityAssessmentsConfig) DataOciDataSafeSecurityAssessments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline">ResetIsBaseline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment">ResetIsScheduleAssessment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId">ResetScheduleAssessmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy">ResetTriggeredBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId"></a>

```go
func ResetId()
```

##### `ResetIsBaseline` <a name="ResetIsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline"></a>

```go
func ResetIsBaseline()
```

##### `ResetIsScheduleAssessment` <a name="ResetIsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment"></a>

```go
func ResetIsScheduleAssessment()
```

##### `ResetScheduleAssessmentId` <a name="ResetScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId"></a>

```go
func ResetScheduleAssessmentId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan"></a>

```go
func ResetTimeCreatedLessThan()
```

##### `ResetTriggeredBy` <a name="ResetTriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy"></a>

```go
func ResetTriggeredBy()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityAssessments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments">SecurityAssessments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput">IsBaselineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput">IsScheduleAssessmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput">ScheduleAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput">TriggeredByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline">IsBaseline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment">IsScheduleAssessment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId">ScheduleAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy">TriggeredBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityAssessmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a>

---

##### `SecurityAssessments`<sup>Required</sup> <a name="SecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments"></a>

```go
func SecurityAssessments() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsBaselineInput`<sup>Optional</sup> <a name="IsBaselineInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput"></a>

```go
func IsBaselineInput() interface{}
```

- *Type:* interface{}

---

##### `IsScheduleAssessmentInput`<sup>Optional</sup> <a name="IsScheduleAssessmentInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput"></a>

```go
func IsScheduleAssessmentInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleAssessmentIdInput`<sup>Optional</sup> <a name="ScheduleAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput"></a>

```go
func ScheduleAssessmentIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput"></a>

```go
func TimeCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `TriggeredByInput`<sup>Optional</sup> <a name="TriggeredByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput"></a>

```go
func TriggeredByInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsBaseline`<sup>Required</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline"></a>

```go
func IsBaseline() interface{}
```

- *Type:* interface{}

---

##### `IsScheduleAssessment`<sup>Required</sup> <a name="IsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment"></a>

```go
func IsScheduleAssessment() interface{}
```

- *Type:* interface{}

---

##### `ScheduleAssessmentId`<sup>Required</sup> <a name="ScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId"></a>

```go
func ScheduleAssessmentId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
func TimeCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan"></a>

```go
func TimeCreatedLessThan() *string
```

- *Type:* *string

---

##### `TriggeredBy`<sup>Required</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy"></a>

```go
func TriggeredBy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentsConfig <a name="DataOciDataSafeSecurityAssessmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	IsBaseline: interface{},
	IsScheduleAssessment: interface{},
	ScheduleAssessmentId: *string,
	State: *string,
	TargetId: *string,
	TimeCreatedGreaterThanOrEqualTo: *string,
	TimeCreatedLessThan: *string,
	TriggeredBy: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline">IsBaseline</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment">IsScheduleAssessment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId">ScheduleAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy">TriggeredBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBaseline`<sup>Optional</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline"></a>

```go
IsBaseline interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}.

---

##### `IsScheduleAssessment`<sup>Optional</sup> <a name="IsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment"></a>

```go
IsScheduleAssessment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}.

---

##### `ScheduleAssessmentId`<sup>Optional</sup> <a name="ScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId"></a>

```go
ScheduleAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
TimeCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan"></a>

```go
TimeCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}.

---

##### `TriggeredBy`<sup>Optional</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy"></a>

```go
TriggeredBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}.

---

### DataOciDataSafeSecurityAssessmentsFilter <a name="DataOciDataSafeSecurityAssessmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}.

---

### DataOciDataSafeSecurityAssessmentsSecurityAssessments <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk {

}
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

&dataocidatasafesecurityassessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentsFilterList <a name="DataOciDataSafeSecurityAssessmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds">IgnoredAssessmentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets">IgnoredTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled">IsAssessmentScheduled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline">IsBaseline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline">IsDeviatedFromBaseline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId">LastComparedBaselineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId">ScheduleSecurityAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics">Statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed">TimeLastAssessed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy">TriggeredBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoredAssessmentIds`<sup>Required</sup> <a name="IgnoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds"></a>

```go
func IgnoredAssessmentIds() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoredTargets`<sup>Required</sup> <a name="IgnoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets"></a>

```go
func IgnoredTargets() *[]*string
```

- *Type:* *[]*string

---

##### `IsAssessmentScheduled`<sup>Required</sup> <a name="IsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled"></a>

```go
func IsAssessmentScheduled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBaseline`<sup>Required</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline"></a>

```go
func IsBaseline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDeviatedFromBaseline`<sup>Required</sup> <a name="IsDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline"></a>

```go
func IsDeviatedFromBaseline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastComparedBaselineId`<sup>Required</sup> <a name="LastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId"></a>

```go
func LastComparedBaselineId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduleSecurityAssessmentId`<sup>Required</sup> <a name="ScheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId"></a>

```go
func ScheduleSecurityAssessmentId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics"></a>

```go
func Statistics() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastAssessed`<sup>Required</sup> <a name="TimeLastAssessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed"></a>

```go
func TimeLastAssessed() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TriggeredBy`<sup>Required</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy"></a>

```go
func TriggeredBy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory">Advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred">Deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk">HighRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk">LowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk">MediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass">Pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Advisory`<sup>Required</sup> <a name="Advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory"></a>

```go
func Advisory() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a>

---

##### `Deferred`<sup>Required</sup> <a name="Deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred"></a>

```go
func Deferred() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a>

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate"></a>

```go
func Evaluate() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a>

---

##### `HighRisk`<sup>Required</sup> <a name="HighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk"></a>

```go
func HighRisk() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a>

---

##### `LowRisk`<sup>Required</sup> <a name="LowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk"></a>

```go
func LowRisk() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a>

---

##### `MediumRisk`<sup>Required</sup> <a name="MediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk"></a>

```go
func MediumRisk() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a>

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass"></a>

```go
func Pass() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a>

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessments"

dataocidatasafesecurityassessments.NewDataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount">TargetsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```go
func AuditingFindingsCount() *f64
```

- *Type:* *f64

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```go
func AuthorizationControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```go
func DataEncryptionFindingsCount() *f64
```

- *Type:* *f64

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```go
func DbConfigurationFindingsCount() *f64
```

- *Type:* *f64

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```go
func FineGrainedAccessControlFindingsCount() *f64
```

- *Type:* *f64

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```go
func PrivilegesAndRolesFindingsCount() *f64
```

- *Type:* *f64

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount"></a>

```go
func TargetsCount() *f64
```

- *Type:* *f64

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```go
func UserAccountsFindingsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a>

---



