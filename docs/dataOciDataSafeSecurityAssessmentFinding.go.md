# `dataOciDataSafeSecurityAssessmentFinding` Submodule <a name="`dataOciDataSafeSecurityAssessmentFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFinding <a name="DataOciDataSafeSecurityAssessmentFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFinding(scope Construct, id *string, config DataOciDataSafeSecurityAssessmentFindingConfig) DataOciDataSafeSecurityAssessmentFinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig">DataOciDataSafeSecurityAssessmentFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey">ResetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding">ResetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences">ResetReferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFindingKey` <a name="ResetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey"></a>

```go
func ResetFindingKey()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTopFinding` <a name="ResetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding"></a>

```go
func ResetIsTopFinding()
```

##### `ResetReferences` <a name="ResetReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences"></a>

```go
func ResetReferences()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFinding_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityAssessmentFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings">Findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput">FindingKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput">IsTopFindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput">ReferencesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey">FindingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding">IsTopFinding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references">References</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityAssessmentFindingFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a>

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings"></a>

```go
func Findings() DataOciDataSafeSecurityAssessmentFindingFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FindingKeyInput`<sup>Optional</sup> <a name="FindingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput"></a>

```go
func FindingKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTopFindingInput`<sup>Optional</sup> <a name="IsTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput"></a>

```go
func IsTopFindingInput() interface{}
```

- *Type:* interface{}

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput"></a>

```go
func ReferencesInput() *string
```

- *Type:* *string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput"></a>

```go
func SecurityAssessmentIdInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `FindingKey`<sup>Required</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey"></a>

```go
func FindingKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding"></a>

```go
func IsTopFinding() interface{}
```

- *Type:* interface{}

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references"></a>

```go
func References() *string
```

- *Type:* *string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId"></a>

```go
func SecurityAssessmentId() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingConfig <a name="DataOciDataSafeSecurityAssessmentFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

&dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFindingConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey">FindingKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding">IsTopFinding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references">References</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId"></a>

```go
SecurityAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}

---

##### `FindingKey`<sup>Optional</sup> <a name="FindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey"></a>

```go
FindingKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTopFinding`<sup>Optional</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding"></a>

```go
IsTopFinding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}.

---

##### `References`<sup>Optional</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references"></a>

```go
References *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}.

---

### DataOciDataSafeSecurityAssessmentFindingFilter <a name="DataOciDataSafeSecurityAssessmentFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

&dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFindingFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingFindings <a name="DataOciDataSafeSecurityAssessmentFindingFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

&dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFindingFindings {

}
```


### DataOciDataSafeSecurityAssessmentFindingFindingsReferences <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

&dataocidatasafesecurityassessmentfinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingFilterList <a name="DataOciDataSafeSecurityAssessmentFindingFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentFindingFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityAssessmentFindingFindingsList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingFindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId">AssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details">Details</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged">HasTargetDbRiskLevelChanged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified">IsRiskModified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding">IsTopFinding</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline">Oneline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity">OracleDefinedSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references">References</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks">Remarks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil">TimeValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId"></a>

```go
func AssessmentId() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details"></a>

```go
func Details() *[]*string
```

- *Type:* *[]*string

---

##### `HasTargetDbRiskLevelChanged`<sup>Required</sup> <a name="HasTargetDbRiskLevelChanged" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged"></a>

```go
func HasTargetDbRiskLevelChanged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRiskModified`<sup>Required</sup> <a name="IsRiskModified" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified"></a>

```go
func IsRiskModified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTopFinding`<sup>Required</sup> <a name="IsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding"></a>

```go
func IsTopFinding() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Oneline`<sup>Required</sup> <a name="Oneline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline"></a>

```go
func Oneline() *string
```

- *Type:* *string

---

##### `OracleDefinedSeverity`<sup>Required</sup> <a name="OracleDefinedSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity"></a>

```go
func OracleDefinedSeverity() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references"></a>

```go
func References() DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a>

---

##### `Remarks`<sup>Required</sup> <a name="Remarks" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks"></a>

```go
func Remarks() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TimeValidUntil`<sup>Required</sup> <a name="TimeValidUntil" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil"></a>

```go
func TimeValidUntil() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentFindingFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a>

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFindingsReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecurityassessmentfinding"

dataocidatasafesecurityassessmentfinding.NewDataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis">Cis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr">Gdpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp">Obp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig">Stig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis"></a>

```go
func Cis() *string
```

- *Type:* *string

---

##### `Gdpr`<sup>Required</sup> <a name="Gdpr" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr"></a>

```go
func Gdpr() *string
```

- *Type:* *string

---

##### `Obp`<sup>Required</sup> <a name="Obp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp"></a>

```go
func Obp() *string
```

- *Type:* *string

---

##### `Stig`<sup>Required</sup> <a name="Stig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig"></a>

```go
func Stig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityAssessmentFindingFindingsReferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a>

---



