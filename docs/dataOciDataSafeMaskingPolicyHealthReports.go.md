# `dataOciDataSafeMaskingPolicyHealthReports` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReports` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReports <a name="DataOciDataSafeMaskingPolicyHealthReports" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports oci_data_safe_masking_policy_health_reports}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReports(scope Construct, id *string, config DataOciDataSafeMaskingPolicyHealthReportsConfig) DataOciDataSafeMaskingPolicyHealthReports
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig">DataOciDataSafeMaskingPolicyHealthReportsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig">DataOciDataSafeMaskingPolicyHealthReportsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId">ResetMaskingPolicyHealthReportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId">ResetMaskingPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId"></a>

```go
func ResetId()
```

##### `ResetMaskingPolicyHealthReportId` <a name="ResetMaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId"></a>

```go
func ResetMaskingPolicyHealthReportId()
```

##### `ResetMaskingPolicyId` <a name="ResetMaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId"></a>

```go
func ResetMaskingPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReports_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReports_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReports_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReports_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReports to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeMaskingPolicyHealthReports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection">MaskingPolicyHealthReportCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput">MaskingPolicyHealthReportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId">MaskingPolicyHealthReportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter"></a>

```go
func Filter() DataOciDataSafeMaskingPolicyHealthReportsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a>

---

##### `MaskingPolicyHealthReportCollection`<sup>Required</sup> <a name="MaskingPolicyHealthReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection"></a>

```go
func MaskingPolicyHealthReportCollection() DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaskingPolicyHealthReportIdInput`<sup>Optional</sup> <a name="MaskingPolicyHealthReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput"></a>

```go
func MaskingPolicyHealthReportIdInput() *string
```

- *Type:* *string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput"></a>

```go
func MaskingPolicyIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingPolicyHealthReportId`<sup>Required</sup> <a name="MaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId"></a>

```go
func MaskingPolicyHealthReportId() *string
```

- *Type:* *string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId"></a>

```go
func MaskingPolicyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

&dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReportsConfig {
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
	MaskingPolicyHealthReportId: *string,
	MaskingPolicyId: *string,
	State: *string,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId">MaskingPolicyHealthReportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#filter DataOciDataSafeMaskingPolicyHealthReports#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingPolicyHealthReportId`<sup>Optional</sup> <a name="MaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId"></a>

```go
MaskingPolicyHealthReportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}.

---

##### `MaskingPolicyId`<sup>Optional</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId"></a>

```go
MaskingPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}.

---

### DataOciDataSafeMaskingPolicyHealthReportsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

&dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReportsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

&dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection {

}
```


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

&dataocidatasafemaskingpolicyhealthreports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyHealthReportsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId"></a>

```go
func MaskingPolicyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicyhealthreports"

dataocidatasafemaskingpolicyhealthreports.NewDataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a>

---



