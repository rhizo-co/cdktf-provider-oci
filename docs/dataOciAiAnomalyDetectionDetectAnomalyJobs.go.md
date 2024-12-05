# `dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule <a name="`dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobs <a name="DataOciAiAnomalyDetectionDetectAnomalyJobs" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs oci_ai_anomaly_detection_detect_anomaly_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobs(scope Construct, id *string, config DataOciAiAnomalyDetectionDetectAnomalyJobsConfig) DataOciAiAnomalyDetectionDetectAnomalyJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig">DataOciAiAnomalyDetectionDetectAnomalyJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig">DataOciAiAnomalyDetectionDetectAnomalyJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId">ResetDetectAnomalyJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDetectAnomalyJobId` <a name="ResetDetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId"></a>

```go
func ResetDetectAnomalyJobId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetModelId` <a name="ResetModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection">DetectAnomalyJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput">DetectAnomalyJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId">DetectAnomalyJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DetectAnomalyJobCollection`<sup>Required</sup> <a name="DetectAnomalyJobCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection"></a>

```go
func DetectAnomalyJobCollection() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter"></a>

```go
func Filter() DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DetectAnomalyJobIdInput`<sup>Optional</sup> <a name="DetectAnomalyJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput"></a>

```go
func DetectAnomalyJobIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DetectAnomalyJobId`<sup>Required</sup> <a name="DetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId"></a>

```go
func DetectAnomalyJobId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsConfig <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DetectAnomalyJobId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ModelId: *string,
	ProjectId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId">DetectAnomalyJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}.

---

##### `DetectAnomalyJobId`<sup>Optional</sup> <a name="DetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId"></a>

```go
DetectAnomalyJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#filter DataOciAiAnomalyDetectionDetectAnomalyJobs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}.

---

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails {

}
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilter <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

&dataociaianomalydetectiondetectanomalyjobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data">Data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames">SignalNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data"></a>

```go
func Data() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a>

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations"></a>

```go
func ObjectLocations() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a>

---

##### `SignalNames`<sup>Required</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames"></a>

```go
func SignalNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity">Sensitivity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails"></a>

```go
func InputDetails() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a>

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails"></a>

```go
func OutputDetails() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Sensitivity`<sup>Required</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity"></a>

```go
func Sensitivity() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items"></a>

```go
func Items() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondetectanomalyjobs"

dataociaianomalydetectiondetectanomalyjobs.NewDataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



