# `dataOciDataSafeSecurityAssessmentFindings` Submodule <a name="`dataOciDataSafeSecurityAssessmentFindings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFindings <a name="DataOciDataSafeSecurityAssessmentFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings oci_data_safe_security_assessment_findings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindings(scope Construct, id *string, config DataOciDataSafeSecurityAssessmentFindingsConfig) DataOciDataSafeSecurityAssessmentFindings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig">DataOciDataSafeSecurityAssessmentFindingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig">DataOciDataSafeSecurityAssessmentFindingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetFindingKey">ResetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetIsTopFinding">ResetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetReferences">ResetReferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFindingKey` <a name="ResetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetFindingKey"></a>

```go
func ResetFindingKey()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTopFinding` <a name="ResetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetIsTopFinding"></a>

```go
func ResetIsTopFinding()
```

##### `ResetReferences` <a name="ResetReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetReferences"></a>

```go
func ResetReferences()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityAssessmentFindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList">DataOciDataSafeSecurityAssessmentFindingsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findings">Findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList">DataOciDataSafeSecurityAssessmentFindingsFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findingKeyInput">FindingKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.isTopFindingInput">IsTopFindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.referencesInput">ReferencesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findingKey">FindingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.isTopFinding">IsTopFinding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.references">References</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityAssessmentFindingsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList">DataOciDataSafeSecurityAssessmentFindingsFilterList</a>

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findings"></a>

```go
func Findings() DataOciDataSafeSecurityAssessmentFindingsFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList">DataOciDataSafeSecurityAssessmentFindingsFindingsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FindingKeyInput`<sup>Optional</sup> <a name="FindingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findingKeyInput"></a>

```go
func FindingKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTopFindingInput`<sup>Optional</sup> <a name="IsTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.isTopFindingInput"></a>

```go
func IsTopFindingInput() interface{}
```

- *Type:* interface{}

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.referencesInput"></a>

```go
func ReferencesInput() *string
```

- *Type:* *string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.securityAssessmentIdInput"></a>

```go
func SecurityAssessmentIdInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `FindingKey`<sup>Required</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.findingKey"></a>

```go
func FindingKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.isTopFinding"></a>

```go
func IsTopFinding() interface{}
```

- *Type:* interface{}

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.references"></a>

```go
func References() *string
```

- *Type:* *string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.securityAssessmentId"></a>

```go
func SecurityAssessmentId() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingsConfig <a name="DataOciDataSafeSecurityAssessmentFindingsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

&dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityAssessmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	FindingKey: *string,
	Id: *string,
	IsTopFinding: interface{},
	References: *string,
	Severity: *string,
	State: *string,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#security_assessment_id DataOciDataSafeSecurityAssessmentFindings#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#access_level DataOciDataSafeSecurityAssessmentFindings#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindings#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.findingKey">FindingKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#finding_key DataOciDataSafeSecurityAssessmentFindings#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#id DataOciDataSafeSecurityAssessmentFindings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.isTopFinding">IsTopFinding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#is_top_finding DataOciDataSafeSecurityAssessmentFindings#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.references">References</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#references DataOciDataSafeSecurityAssessmentFindings#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#severity DataOciDataSafeSecurityAssessmentFindings#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#state DataOciDataSafeSecurityAssessmentFindings#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#target_id DataOciDataSafeSecurityAssessmentFindings#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.securityAssessmentId"></a>

```go
SecurityAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#security_assessment_id DataOciDataSafeSecurityAssessmentFindings#security_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#access_level DataOciDataSafeSecurityAssessmentFindings#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindings#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#filter DataOciDataSafeSecurityAssessmentFindings#filter}

---

##### `FindingKey`<sup>Optional</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.findingKey"></a>

```go
FindingKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#finding_key DataOciDataSafeSecurityAssessmentFindings#finding_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#id DataOciDataSafeSecurityAssessmentFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTopFinding`<sup>Optional</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.isTopFinding"></a>

```go
IsTopFinding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#is_top_finding DataOciDataSafeSecurityAssessmentFindings#is_top_finding}.

---

##### `References`<sup>Optional</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.references"></a>

```go
References *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#references DataOciDataSafeSecurityAssessmentFindings#references}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#severity DataOciDataSafeSecurityAssessmentFindings#severity}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#state DataOciDataSafeSecurityAssessmentFindings#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#target_id DataOciDataSafeSecurityAssessmentFindings#target_id}.

---

### DataOciDataSafeSecurityAssessmentFindingsFilter <a name="DataOciDataSafeSecurityAssessmentFindingsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

&dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindingsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#name DataOciDataSafeSecurityAssessmentFindings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#values DataOciDataSafeSecurityAssessmentFindings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#regex DataOciDataSafeSecurityAssessmentFindings#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#name DataOciDataSafeSecurityAssessmentFindings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#values DataOciDataSafeSecurityAssessmentFindings#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings#regex DataOciDataSafeSecurityAssessmentFindings#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingsFindings <a name="DataOciDataSafeSecurityAssessmentFindingsFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

&dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindingsFindings {

}
```


### DataOciDataSafeSecurityAssessmentFindingsFindingsReferences <a name="DataOciDataSafeSecurityAssessmentFindingsFindingsReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

&dataocidatasafesecurityassessmentfindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferences {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingsFilterList <a name="DataOciDataSafeSecurityAssessmentFindingsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentFindingsFindingsList <a name="DataOciDataSafeSecurityAssessmentFindingsFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingsFindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.assessmentId">AssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.details">Details</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.hasTargetDbRiskLevelChanged">HasTargetDbRiskLevelChanged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.isRiskModified">IsRiskModified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.isTopFinding">IsTopFinding</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.oneline">Oneline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.oracleDefinedSeverity">OracleDefinedSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.references">References</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.remarks">Remarks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.timeValidUntil">TimeValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindings">DataOciDataSafeSecurityAssessmentFindingsFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.assessmentId"></a>

```go
func AssessmentId() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.details"></a>

```go
func Details() *[]*string
```

- *Type:* *[]*string

---

##### `HasTargetDbRiskLevelChanged`<sup>Required</sup> <a name="HasTargetDbRiskLevelChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.hasTargetDbRiskLevelChanged"></a>

```go
func HasTargetDbRiskLevelChanged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRiskModified`<sup>Required</sup> <a name="IsRiskModified" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.isRiskModified"></a>

```go
func IsRiskModified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.isTopFinding"></a>

```go
func IsTopFinding() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Oneline`<sup>Required</sup> <a name="Oneline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.oneline"></a>

```go
func Oneline() *string
```

- *Type:* *string

---

##### `OracleDefinedSeverity`<sup>Required</sup> <a name="OracleDefinedSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.oracleDefinedSeverity"></a>

```go
func OracleDefinedSeverity() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.references"></a>

```go
func References() DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList</a>

---

##### `Remarks`<sup>Required</sup> <a name="Remarks" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.remarks"></a>

```go
func Remarks() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TimeValidUntil`<sup>Required</sup> <a name="TimeValidUntil" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.timeValidUntil"></a>

```go
func TimeValidUntil() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentFindingsFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindings">DataOciDataSafeSecurityAssessmentFindingsFindings</a>

---


### DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList <a name="DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfindings"

dataocidatasafesecurityassessmentfindings.NewDataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.cis">Cis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.gdpr">Gdpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.obp">Obp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.stig">Stig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferences">DataOciDataSafeSecurityAssessmentFindingsFindingsReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.cis"></a>

```go
func Cis() *string
```

- *Type:* *string

---

##### `Gdpr`<sup>Required</sup> <a name="Gdpr" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.gdpr"></a>

```go
func Gdpr() *string
```

- *Type:* *string

---

##### `Obp`<sup>Required</sup> <a name="Obp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.obp"></a>

```go
func Obp() *string
```

- *Type:* *string

---

##### `Stig`<sup>Required</sup> <a name="Stig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.stig"></a>

```go
func Stig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentFindingsFindingsReferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindings.DataOciDataSafeSecurityAssessmentFindingsFindingsReferences">DataOciDataSafeSecurityAssessmentFindingsFindingsReferences</a>

---



