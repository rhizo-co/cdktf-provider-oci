# `dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule <a name="`dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluate <a name="DataOciStackMonitoringBaselineableMetricsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate oci_stack_monitoring_baselineable_metrics_evaluate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluate(scope Construct, id *string, config DataOciStackMonitoringBaselineableMetricsEvaluateConfig) DataOciStackMonitoringBaselineableMetricsEvaluate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig">DataOciStackMonitoringBaselineableMetricsEvaluateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig">DataOciStackMonitoringBaselineableMetricsEvaluateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetricsEvaluate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciStackMonitoringBaselineableMetricsEvaluate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetricsEvaluate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints">DataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput">BaselineableMetricIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId">BaselineableMetricId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints"></a>

```go
func DataPoints() DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items"></a>

```go
func Items() DataOciStackMonitoringBaselineableMetricsEvaluateItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a>

---

##### `BaselineableMetricIdInput`<sup>Optional</sup> <a name="BaselineableMetricIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput"></a>

```go
func BaselineableMetricIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `BaselineableMetricId`<sup>Required</sup> <a name="BaselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId"></a>

```go
func BaselineableMetricId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateConfig <a name="DataOciStackMonitoringBaselineableMetricsEvaluateConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaselineableMetricId: *string,
	Items: interface{},
	ResourceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId">BaselineableMetricId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items">Items</a></code> | <code>interface{}</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaselineableMetricId`<sup>Required</sup> <a name="BaselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId"></a>

```go
BaselineableMetricId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}.

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#items DataOciStackMonitoringBaselineableMetricsEvaluate#items}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints {

}
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItems <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems {
	EvaluationDataPoints: interface{},
	TrainingDataPoints: interface{},
	Dimensions: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints">EvaluationDataPoints</a></code> | <code>interface{}</code> | evaluation_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints">TrainingDataPoints</a></code> | <code>interface{}</code> | training_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}. |

---

##### `EvaluationDataPoints`<sup>Required</sup> <a name="EvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints"></a>

```go
EvaluationDataPoints interface{}
```

- *Type:* interface{}

evaluation_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#evaluation_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#evaluation_data_points}

---

##### `TrainingDataPoints`<sup>Required</sup> <a name="TrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints"></a>

```go
TrainingDataPoints interface{}
```

- *Type:* interface{}

training_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#training_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#training_data_points}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions"></a>

```go
Dimensions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints {

}
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints {
	Timestamp: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp">Timestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

&dataocistackmonitoringbaselineablemetricsevaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints {
	Timestamp: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp">Timestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly">Anomaly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high">High</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low">Low</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Anomaly`<sup>Required</sup> <a name="Anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly"></a>

```go
func Anomaly() *f64
```

- *Type:* *f64

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high"></a>

```go
func High() *f64
```

- *Type:* *f64

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low"></a>

```go
func Low() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly">Anomaly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high">High</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low">Low</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Anomaly`<sup>Required</sup> <a name="Anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly"></a>

```go
func Anomaly() *f64
```

- *Type:* *f64

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high"></a>

```go
func High() *f64
```

- *Type:* *f64

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low"></a>

```go
func Low() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints">PutEvaluationDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints">PutTrainingDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluationDataPoints` <a name="PutEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints"></a>

```go
func PutEvaluationDataPoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrainingDataPoints` <a name="PutTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints"></a>

```go
func PutTrainingDataPoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints">DataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints">EvaluationDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints">TrainingDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput">EvaluationDataPointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput">TrainingDataPointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints"></a>

```go
func DataPoints() DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a>

---

##### `EvaluationDataPoints`<sup>Required</sup> <a name="EvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints"></a>

```go
func EvaluationDataPoints() DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a>

---

##### `TrainingDataPoints`<sup>Required</sup> <a name="TrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints"></a>

```go
func TrainingDataPoints() DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EvaluationDataPointsInput`<sup>Optional</sup> <a name="EvaluationDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput"></a>

```go
func EvaluationDataPointsInput() interface{}
```

- *Type:* interface{}

---

##### `TrainingDataPointsInput`<sup>Optional</sup> <a name="TrainingDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput"></a>

```go
func TrainingDataPointsInput() interface{}
```

- *Type:* interface{}

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringbaselineablemetricsevaluate"

dataocistackmonitoringbaselineablemetricsevaluate.NewDataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



