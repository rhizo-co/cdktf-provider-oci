# `dataOciApmTracesTraceSnapshotData` Submodule <a name="`dataOciApmTracesTraceSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceSnapshotData <a name="DataOciApmTracesTraceSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.NewDataOciApmTracesTraceSnapshotData(scope Construct, id *string, config DataOciApmTracesTraceSnapshotDataConfig) DataOciApmTracesTraceSnapshotData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized">ResetIsSummarized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime">ResetSnapshotTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId">ResetThreadId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId"></a>

```go
func ResetId()
```

##### `ResetIsSummarized` <a name="ResetIsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized"></a>

```go
func ResetIsSummarized()
```

##### `ResetSnapshotTime` <a name="ResetSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime"></a>

```go
func ResetSnapshotTime()
```

##### `ResetThreadId` <a name="ResetThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId"></a>

```go
func ResetThreadId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmTracesTraceSnapshotData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmTracesTraceSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails">TraceSnapshotDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput">IsSummarizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput">SnapshotTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput">ThreadIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput">TraceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized">IsSummarized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime">SnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId">ThreadId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey">TraceKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TraceSnapshotDetails`<sup>Required</sup> <a name="TraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails"></a>

```go
func TraceSnapshotDetails() DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsSummarizedInput`<sup>Optional</sup> <a name="IsSummarizedInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput"></a>

```go
func IsSummarizedInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotTimeInput`<sup>Optional</sup> <a name="SnapshotTimeInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput"></a>

```go
func SnapshotTimeInput() *string
```

- *Type:* *string

---

##### `ThreadIdInput`<sup>Optional</sup> <a name="ThreadIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput"></a>

```go
func ThreadIdInput() *string
```

- *Type:* *string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput"></a>

```go
func TraceKeyInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSummarized`<sup>Required</sup> <a name="IsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized"></a>

```go
func IsSummarized() interface{}
```

- *Type:* interface{}

---

##### `SnapshotTime`<sup>Required</sup> <a name="SnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime"></a>

```go
func SnapshotTime() *string
```

- *Type:* *string

---

##### `ThreadId`<sup>Required</sup> <a name="ThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId"></a>

```go
func ThreadId() *string
```

- *Type:* *string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey"></a>

```go
func TraceKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceSnapshotDataConfig <a name="DataOciApmTracesTraceSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

&dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotDataConfig {
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
	IsSummarized: interface{},
	SnapshotTime: *string,
	ThreadId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey">TraceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized">IsSummarized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime">SnapshotTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId">ThreadId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey"></a>

```go
TraceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSummarized`<sup>Optional</sup> <a name="IsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized"></a>

```go
IsSummarized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `SnapshotTime`<sup>Optional</sup> <a name="SnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime"></a>

```go
SnapshotTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `ThreadId`<sup>Optional</sup> <a name="ThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId"></a>

```go
ThreadId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

&dataociapmtracestracesnapshotdata.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.NewDataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestracesnapshotdata"

dataociapmtracestracesnapshotdata.NewDataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a>

---



