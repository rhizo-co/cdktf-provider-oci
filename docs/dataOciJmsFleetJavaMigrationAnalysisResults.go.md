# `dataOciJmsFleetJavaMigrationAnalysisResults` Submodule <a name="`dataOciJmsFleetJavaMigrationAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResults <a name="DataOciJmsFleetJavaMigrationAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results oci_jms_fleet_java_migration_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResults(scope Construct, id *string, config DataOciJmsFleetJavaMigrationAnalysisResultsConfig) DataOciJmsFleetJavaMigrationAnalysisResults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig">DataOciJmsFleetJavaMigrationAnalysisResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig">DataOciJmsFleetJavaMigrationAnalysisResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetManagedInstanceId">ResetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationName` <a name="ResetApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetApplicationName"></a>

```go
func ResetApplicationName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedInstanceId` <a name="ResetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetManagedInstanceId"></a>

```go
func ResetManagedInstanceId()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResults_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsFleetJavaMigrationAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList">DataOciJmsFleetJavaMigrationAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.javaMigrationAnalysisResultCollection">JavaMigrationAnalysisResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filter"></a>

```go
func Filter() DataOciJmsFleetJavaMigrationAnalysisResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList">DataOciJmsFleetJavaMigrationAnalysisResultsFilterList</a>

---

##### `JavaMigrationAnalysisResultCollection`<sup>Required</sup> <a name="JavaMigrationAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.javaMigrationAnalysisResultCollection"></a>

```go
func JavaMigrationAnalysisResultCollection() DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultsConfig <a name="DataOciJmsFleetJavaMigrationAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

&dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FleetId: *string,
	ApplicationName: *string,
	Filter: interface{},
	HostName: *string,
	Id: *string,
	ManagedInstanceId: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}.

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#filter DataOciJmsFleetJavaMigrationAnalysisResults#filter}

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedInstanceId`<sup>Optional</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}.

---

### DataOciJmsFleetJavaMigrationAnalysisResultsFilter <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

&dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#name DataOciJmsFleetJavaMigrationAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#values DataOciJmsFleetJavaMigrationAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#regex DataOciJmsFleetJavaMigrationAnalysisResults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#name DataOciJmsFleetJavaMigrationAnalysisResults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#values DataOciJmsFleetJavaMigrationAnalysisResults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#regex DataOciJmsFleetJavaMigrationAnalysisResults#regex}.

---

### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

&dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection {

}
```


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

&dataocijmsfleetjavamigrationanalysisresults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultsFilterList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationExecutionType">ApplicationExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationPath">ApplicationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectList">ObjectList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectStorageUploadDirPath">ObjectStorageUploadDirPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.sourceJdkVersion">SourceJdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.targetJdkVersion">TargetJdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationExecutionType`<sup>Required</sup> <a name="ApplicationExecutionType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationExecutionType"></a>

```go
func ApplicationExecutionType() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ApplicationPath`<sup>Required</sup> <a name="ApplicationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationPath"></a>

```go
func ApplicationPath() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectList`<sup>Required</sup> <a name="ObjectList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectList"></a>

```go
func ObjectList() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectStorageUploadDirPath`<sup>Required</sup> <a name="ObjectStorageUploadDirPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectStorageUploadDirPath"></a>

```go
func ObjectStorageUploadDirPath() *string
```

- *Type:* *string

---

##### `SourceJdkVersion`<sup>Required</sup> <a name="SourceJdkVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.sourceJdkVersion"></a>

```go
func SourceJdkVersion() *string
```

- *Type:* *string

---

##### `TargetJdkVersion`<sup>Required</sup> <a name="TargetJdkVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.targetJdkVersion"></a>

```go
func TargetJdkVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresults"

dataocijmsfleetjavamigrationanalysisresults.NewDataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.items"></a>

```go
func Items() DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection</a>

---



