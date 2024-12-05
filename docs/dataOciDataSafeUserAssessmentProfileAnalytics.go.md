# `dataOciDataSafeUserAssessmentProfileAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentProfileAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfileAnalytics <a name="DataOciDataSafeUserAssessmentProfileAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics oci_data_safe_user_assessment_profile_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.NewDataOciDataSafeUserAssessmentProfileAnalytics(scope Construct, id *string, config DataOciDataSafeUserAssessmentProfileAnalyticsConfig) DataOciDataSafeUserAssessmentProfileAnalytics
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig">DataOciDataSafeUserAssessmentProfileAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig">DataOciDataSafeUserAssessmentProfileAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetProfileName">ResetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetId"></a>

```go
func ResetId()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetProfileName"></a>

```go
func ResetProfileName()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfileAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalytics_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalytics_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalytics_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalytics_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfileAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfileAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeUserAssessmentProfileAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfileAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList">DataOciDataSafeUserAssessmentProfileAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileAggregations">ProfileAggregations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filter"></a>

```go
func Filter() DataOciDataSafeUserAssessmentProfileAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList">DataOciDataSafeUserAssessmentProfileAnalyticsFilterList</a>

---

##### `ProfileAggregations`<sup>Required</sup> <a name="ProfileAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileAggregations"></a>

```go
func ProfileAggregations() DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentIdInput"></a>

```go
func UserAssessmentIdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.userAssessmentId"></a>

```go
func UserAssessmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalytics.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfileAnalyticsConfig <a name="DataOciDataSafeUserAssessmentProfileAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

&dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	UserAssessmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	Id: *string,
	ProfileName: *string,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#user_assessment_id DataOciDataSafeUserAssessmentProfileAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#access_level DataOciDataSafeUserAssessmentProfileAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#id DataOciDataSafeUserAssessmentProfileAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#profile_name DataOciDataSafeUserAssessmentProfileAnalytics#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#target_id DataOciDataSafeUserAssessmentProfileAnalytics#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id}.

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.userAssessmentId"></a>

```go
UserAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#user_assessment_id DataOciDataSafeUserAssessmentProfileAnalytics#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#access_level DataOciDataSafeUserAssessmentProfileAnalytics#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfileAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#filter DataOciDataSafeUserAssessmentProfileAnalytics#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#id DataOciDataSafeUserAssessmentProfileAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#profile_name DataOciDataSafeUserAssessmentProfileAnalytics#profile_name}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#target_id DataOciDataSafeUserAssessmentProfileAnalytics#target_id}.

---

### DataOciDataSafeUserAssessmentProfileAnalyticsFilter <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

&dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#name DataOciDataSafeUserAssessmentProfileAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#values DataOciDataSafeUserAssessmentProfileAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#regex DataOciDataSafeUserAssessmentProfileAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#name DataOciDataSafeUserAssessmentProfileAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#values DataOciDataSafeUserAssessmentProfileAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profile_analytics#regex DataOciDataSafeUserAssessmentProfileAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

&dataocidatasafeuserassessmentprofileanalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfileAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.NewDataOciDataSafeUserAssessmentProfileAnalyticsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentProfileAnalyticsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.NewDataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.NewDataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference <a name="DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeuserassessmentprofileanalytics"

dataocidatasafeuserassessmentprofileanalytics.NewDataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.items">Items</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.items"></a>

```go
func Items() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfileAnalytics.DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations">DataOciDataSafeUserAssessmentProfileAnalyticsProfileAggregations</a>

---



