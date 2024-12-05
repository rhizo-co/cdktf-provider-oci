# `dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule <a name="`dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResult <a name="DataOciJmsFleetPerformanceTuningAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result oci_jms_fleet_performance_tuning_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

dataocijmsfleetperformancetuninganalysisresult.NewDataOciJmsFleetPerformanceTuningAnalysisResult(scope Construct, id *string, config DataOciJmsFleetPerformanceTuningAnalysisResultConfig) DataOciJmsFleetPerformanceTuningAnalysisResult
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig">DataOciJmsFleetPerformanceTuningAnalysisResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig">DataOciJmsFleetPerformanceTuningAnalysisResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

dataocijmsfleetperformancetuninganalysisresult.DataOciJmsFleetPerformanceTuningAnalysisResult_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

dataocijmsfleetperformancetuninganalysisresult.DataOciJmsFleetPerformanceTuningAnalysisResult_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

dataocijmsfleetperformancetuninganalysisresult.DataOciJmsFleetPerformanceTuningAnalysisResult_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

dataocijmsfleetperformancetuninganalysisresult.DataOciJmsFleetPerformanceTuningAnalysisResult_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId">ApplicationInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath">ApplicationInstallationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount">WarningCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput">PerformanceTuningAnalysisResultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId">PerformanceTuningAnalysisResultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationInstallationId`<sup>Required</sup> <a name="ApplicationInstallationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId"></a>

```go
func ApplicationInstallationId() *string
```

- *Type:* *string

---

##### `ApplicationInstallationPath`<sup>Required</sup> <a name="ApplicationInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath"></a>

```go
func ApplicationInstallationPath() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `WarningCount`<sup>Required</sup> <a name="WarningCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount"></a>

```go
func WarningCount() *f64
```

- *Type:* *f64

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PerformanceTuningAnalysisResultIdInput`<sup>Optional</sup> <a name="PerformanceTuningAnalysisResultIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput"></a>

```go
func PerformanceTuningAnalysisResultIdInput() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PerformanceTuningAnalysisResultId`<sup>Required</sup> <a name="PerformanceTuningAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId"></a>

```go
func PerformanceTuningAnalysisResultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultConfig <a name="DataOciJmsFleetPerformanceTuningAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetperformancetuninganalysisresult"

&dataocijmsfleetperformancetuninganalysisresult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FleetId: *string,
	PerformanceTuningAnalysisResultId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId">PerformanceTuningAnalysisResultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}.

---

##### `PerformanceTuningAnalysisResultId`<sup>Required</sup> <a name="PerformanceTuningAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId"></a>

```go
PerformanceTuningAnalysisResultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



