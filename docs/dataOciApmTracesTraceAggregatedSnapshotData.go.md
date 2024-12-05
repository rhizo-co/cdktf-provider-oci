# `dataOciApmTracesTraceAggregatedSnapshotData` Submodule <a name="`dataOciApmTracesTraceAggregatedSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceAggregatedSnapshotData <a name="DataOciApmTracesTraceAggregatedSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.NewDataOciApmTracesTraceAggregatedSnapshotData(scope Construct, id *string, config DataOciApmTracesTraceAggregatedSnapshotDataConfig) DataOciApmTracesTraceAggregatedSnapshotData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey">ResetSpanKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName">ResetSpanName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId"></a>

```go
func ResetId()
```

##### `ResetServerName` <a name="ResetServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetSpanKey` <a name="ResetSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey"></a>

```go
func ResetSpanKey()
```

##### `ResetSpanName` <a name="ResetSpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName"></a>

```go
func ResetSpanName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmTracesTraceAggregatedSnapshotData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmTracesTraceAggregatedSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceAggregatedSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput">SpanKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput">SpanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput">TraceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey">SpanKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName">SpanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey">TraceKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details"></a>

```go
func Details() DataOciApmTracesTraceAggregatedSnapshotDataDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SpanKeyInput`<sup>Optional</sup> <a name="SpanKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput"></a>

```go
func SpanKeyInput() *string
```

- *Type:* *string

---

##### `SpanNameInput`<sup>Optional</sup> <a name="SpanNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput"></a>

```go
func SpanNameInput() *string
```

- *Type:* *string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput"></a>

```go
func TraceKeyInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SpanKey`<sup>Required</sup> <a name="SpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey"></a>

```go
func SpanKey() *string
```

- *Type:* *string

---

##### `SpanName`<sup>Required</sup> <a name="SpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName"></a>

```go
func SpanName() *string
```

- *Type:* *string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey"></a>

```go
func TraceKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataConfig <a name="DataOciApmTracesTraceAggregatedSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

&dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotDataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	TraceKey: *string,
	Id: *string,
	ServerName: *string,
	ServiceName: *string,
	SpanKey: *string,
	SpanName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey">TraceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey">SpanKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName">SpanName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey"></a>

```go
TraceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}.

---

##### `SpanKey`<sup>Optional</sup> <a name="SpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey"></a>

```go
SpanKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}.

---

##### `SpanName`<sup>Optional</sup> <a name="SpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName"></a>

```go
SpanName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}.

---

### DataOciApmTracesTraceAggregatedSnapshotDataDetails <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

&dataociapmtracestraceaggregatedsnapshotdata.DataOciApmTracesTraceAggregatedSnapshotDataDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataDetailsList <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.NewDataOciApmTracesTraceAggregatedSnapshotDataDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceAggregatedSnapshotDataDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestraceaggregatedsnapshotdata"

dataociapmtracestraceaggregatedsnapshotdata.NewDataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceAggregatedSnapshotDataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a>

---



