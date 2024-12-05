# `dataOciApmTracesTrace` Submodule <a name="`dataOciApmTracesTrace` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTrace <a name="DataOciApmTracesTrace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTrace(scope Construct, id *string, config DataOciApmTracesTraceConfig) DataOciApmTracesTrace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo">ResetTimeTraceStartedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan">ResetTimeTraceStartedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace">ResetTraceNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeTraceStartedGreaterThanOrEqualTo` <a name="ResetTimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo"></a>

```go
func ResetTimeTraceStartedGreaterThanOrEqualTo()
```

##### `ResetTimeTraceStartedLessThan` <a name="ResetTimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan"></a>

```go
func ResetTimeTraceStartedLessThan()
```

##### `ResetTraceNamespace` <a name="ResetTraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace"></a>

```go
func ResetTraceNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.DataOciApmTracesTrace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.DataOciApmTracesTrace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.DataOciApmTracesTrace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.DataOciApmTracesTrace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmTracesTrace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmTracesTrace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTrace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount">ErrorSpanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault">IsFault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs">RootSpanDurationInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName">RootSpanOperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName">RootSpanServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries">ServiceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount">SpanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans">Spans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary">SpanSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted">TimeEarliestSpanStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded">TimeLatestSpanEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded">TimeRootSpanEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted">TimeRootSpanStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs">TraceDurationInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode">TraceErrorCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType">TraceErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus">TraceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput">TimeTraceStartedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput">TimeTraceStartedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput">TraceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput">TraceNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo">TimeTraceStartedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan">TimeTraceStartedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey">TraceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace">TraceNamespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ErrorSpanCount`<sup>Required</sup> <a name="ErrorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount"></a>

```go
func ErrorSpanCount() *f64
```

- *Type:* *f64

---

##### `IsFault`<sup>Required</sup> <a name="IsFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault"></a>

```go
func IsFault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RootSpanDurationInMs`<sup>Required</sup> <a name="RootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs"></a>

```go
func RootSpanDurationInMs() *f64
```

- *Type:* *f64

---

##### `RootSpanOperationName`<sup>Required</sup> <a name="RootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName"></a>

```go
func RootSpanOperationName() *string
```

- *Type:* *string

---

##### `RootSpanServiceName`<sup>Required</sup> <a name="RootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName"></a>

```go
func RootSpanServiceName() *string
```

- *Type:* *string

---

##### `ServiceSummaries`<sup>Required</sup> <a name="ServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries"></a>

```go
func ServiceSummaries() DataOciApmTracesTraceServiceSummariesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a>

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SpanCount`<sup>Required</sup> <a name="SpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount"></a>

```go
func SpanCount() *f64
```

- *Type:* *f64

---

##### `Spans`<sup>Required</sup> <a name="Spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans"></a>

```go
func Spans() DataOciApmTracesTraceSpansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a>

---

##### `SpanSummary`<sup>Required</sup> <a name="SpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary"></a>

```go
func SpanSummary() DataOciApmTracesTraceSpanSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a>

---

##### `TimeEarliestSpanStarted`<sup>Required</sup> <a name="TimeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted"></a>

```go
func TimeEarliestSpanStarted() *string
```

- *Type:* *string

---

##### `TimeLatestSpanEnded`<sup>Required</sup> <a name="TimeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded"></a>

```go
func TimeLatestSpanEnded() *string
```

- *Type:* *string

---

##### `TimeRootSpanEnded`<sup>Required</sup> <a name="TimeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded"></a>

```go
func TimeRootSpanEnded() *string
```

- *Type:* *string

---

##### `TimeRootSpanStarted`<sup>Required</sup> <a name="TimeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted"></a>

```go
func TimeRootSpanStarted() *string
```

- *Type:* *string

---

##### `TraceDurationInMs`<sup>Required</sup> <a name="TraceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs"></a>

```go
func TraceDurationInMs() *f64
```

- *Type:* *f64

---

##### `TraceErrorCode`<sup>Required</sup> <a name="TraceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode"></a>

```go
func TraceErrorCode() *string
```

- *Type:* *string

---

##### `TraceErrorType`<sup>Required</sup> <a name="TraceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType"></a>

```go
func TraceErrorType() *string
```

- *Type:* *string

---

##### `TraceStatus`<sup>Required</sup> <a name="TraceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus"></a>

```go
func TraceStatus() *string
```

- *Type:* *string

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeTraceStartedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeTraceStartedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput"></a>

```go
func TimeTraceStartedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeTraceStartedLessThanInput`<sup>Optional</sup> <a name="TimeTraceStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput"></a>

```go
func TimeTraceStartedLessThanInput() *string
```

- *Type:* *string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput"></a>

```go
func TraceKeyInput() *string
```

- *Type:* *string

---

##### `TraceNamespaceInput`<sup>Optional</sup> <a name="TraceNamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput"></a>

```go
func TraceNamespaceInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeTraceStartedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```go
func TimeTraceStartedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeTraceStartedLessThan`<sup>Required</sup> <a name="TimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan"></a>

```go
func TimeTraceStartedLessThan() *string
```

- *Type:* *string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey"></a>

```go
func TraceKey() *string
```

- *Type:* *string

---

##### `TraceNamespace`<sup>Required</sup> <a name="TraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace"></a>

```go
func TraceNamespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceConfig <a name="DataOciApmTracesTraceConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceConfig {
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
	TimeTraceStartedGreaterThanOrEqualTo: *string,
	TimeTraceStartedLessThan: *string,
	TraceNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey">TraceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo">TimeTraceStartedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan">TimeTraceStartedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace">TraceNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey"></a>

```go
TraceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeTraceStartedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```go
TimeTraceStartedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}.

---

##### `TimeTraceStartedLessThan`<sup>Optional</sup> <a name="TimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan"></a>

```go
TimeTraceStartedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}.

---

##### `TraceNamespace`<sup>Optional</sup> <a name="TraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace"></a>

```go
TraceNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}.

---

### DataOciApmTracesTraceServiceSummaries <a name="DataOciApmTracesTraceServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceServiceSummaries {

}
```


### DataOciApmTracesTraceSpans <a name="DataOciApmTracesTraceSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpans {

}
```


### DataOciApmTracesTraceSpansLogs <a name="DataOciApmTracesTraceSpansLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpansLogs {

}
```


### DataOciApmTracesTraceSpansLogsSpanLogs <a name="DataOciApmTracesTraceSpansLogsSpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpansLogsSpanLogs {

}
```


### DataOciApmTracesTraceSpansTags <a name="DataOciApmTracesTraceSpansTags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpansTags {

}
```


### DataOciApmTracesTraceSpanSummary <a name="DataOciApmTracesTraceSpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpanSummary {

}
```


### DataOciApmTracesTraceSpanSummaryServiceSummaries <a name="DataOciApmTracesTraceSpanSummaryServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

&dataociapmtracestrace.DataOciApmTracesTraceSpanSummaryServiceSummaries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceServiceSummariesList <a name="DataOciApmTracesTraceServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceServiceSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceServiceSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceServiceSummariesOutputReference <a name="DataOciApmTracesTraceServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceServiceSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceServiceSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans">ErrorSpans</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName">SpanServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans">TotalSpans</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorSpans`<sup>Required</sup> <a name="ErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans"></a>

```go
func ErrorSpans() *string
```

- *Type:* *string

---

##### `SpanServiceName`<sup>Required</sup> <a name="SpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName"></a>

```go
func SpanServiceName() *string
```

- *Type:* *string

---

##### `TotalSpans`<sup>Required</sup> <a name="TotalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans"></a>

```go
func TotalSpans() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceServiceSummaries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a>

---


### DataOciApmTracesTraceSpansList <a name="DataOciApmTracesTraceSpansList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpansLogsList <a name="DataOciApmTracesTraceSpansLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpansLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpansLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpansLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpansLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName">EventName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs">SpanLogs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName"></a>

```go
func EventName() *string
```

- *Type:* *string

---

##### `SpanLogs`<sup>Required</sup> <a name="SpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs"></a>

```go
func SpanLogs() DataOciApmTracesTraceSpansLogsSpanLogsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpansLogs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a>

---


### DataOciApmTracesTraceSpansLogsSpanLogsList <a name="DataOciApmTracesTraceSpansLogsSpanLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansLogsSpanLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpansLogsSpanLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpansLogsSpanLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpansLogsSpanLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsSpanLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansLogsSpanLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpansLogsSpanLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey">LogKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue">LogValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogKey`<sup>Required</sup> <a name="LogKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey"></a>

```go
func LogKey() *string
```

- *Type:* *string

---

##### `LogValue`<sup>Required</sup> <a name="LogValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue"></a>

```go
func LogValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpansLogsSpanLogs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a>

---


### DataOciApmTracesTraceSpansOutputReference <a name="DataOciApmTracesTraceSpansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs">DurationInMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError">IsError</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs">Logs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey">ParentSpanKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey">TraceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMs`<sup>Required</sup> <a name="DurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs"></a>

```go
func DurationInMs() *string
```

- *Type:* *string

---

##### `IsError`<sup>Required</sup> <a name="IsError" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError"></a>

```go
func IsError() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs"></a>

```go
func Logs() DataOciApmTracesTraceSpansLogsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a>

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `ParentSpanKey`<sup>Required</sup> <a name="ParentSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey"></a>

```go
func ParentSpanKey() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags"></a>

```go
func Tags() DataOciApmTracesTraceSpansTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey"></a>

```go
func TraceKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a>

---


### DataOciApmTracesTraceSpansTagsList <a name="DataOciApmTracesTraceSpansTagsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpansTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpansTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpansTagsOutputReference <a name="DataOciApmTracesTraceSpansTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpansTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpansTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpansTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a>

---


### DataOciApmTracesTraceSpanSummaryList <a name="DataOciApmTracesTraceSpanSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpanSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpanSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpanSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpanSummaryOutputReference <a name="DataOciApmTracesTraceSpanSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpanSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpanSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount">ErrorSpanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault">IsFault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs">RootSpanDurationInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName">RootSpanOperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName">RootSpanServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries">ServiceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount">SpanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted">TimeEarliestSpanStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded">TimeLatestSpanEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded">TimeRootSpanEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted">TimeRootSpanStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs">TraceDurationInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode">TraceErrorCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType">TraceErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus">TraceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorSpanCount`<sup>Required</sup> <a name="ErrorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount"></a>

```go
func ErrorSpanCount() *f64
```

- *Type:* *f64

---

##### `IsFault`<sup>Required</sup> <a name="IsFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault"></a>

```go
func IsFault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RootSpanDurationInMs`<sup>Required</sup> <a name="RootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs"></a>

```go
func RootSpanDurationInMs() *f64
```

- *Type:* *f64

---

##### `RootSpanOperationName`<sup>Required</sup> <a name="RootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName"></a>

```go
func RootSpanOperationName() *string
```

- *Type:* *string

---

##### `RootSpanServiceName`<sup>Required</sup> <a name="RootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName"></a>

```go
func RootSpanServiceName() *string
```

- *Type:* *string

---

##### `ServiceSummaries`<sup>Required</sup> <a name="ServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries"></a>

```go
func ServiceSummaries() DataOciApmTracesTraceSpanSummaryServiceSummariesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a>

---

##### `SpanCount`<sup>Required</sup> <a name="SpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount"></a>

```go
func SpanCount() *f64
```

- *Type:* *f64

---

##### `TimeEarliestSpanStarted`<sup>Required</sup> <a name="TimeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted"></a>

```go
func TimeEarliestSpanStarted() *string
```

- *Type:* *string

---

##### `TimeLatestSpanEnded`<sup>Required</sup> <a name="TimeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded"></a>

```go
func TimeLatestSpanEnded() *string
```

- *Type:* *string

---

##### `TimeRootSpanEnded`<sup>Required</sup> <a name="TimeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded"></a>

```go
func TimeRootSpanEnded() *string
```

- *Type:* *string

---

##### `TimeRootSpanStarted`<sup>Required</sup> <a name="TimeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted"></a>

```go
func TimeRootSpanStarted() *string
```

- *Type:* *string

---

##### `TraceDurationInMs`<sup>Required</sup> <a name="TraceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs"></a>

```go
func TraceDurationInMs() *f64
```

- *Type:* *f64

---

##### `TraceErrorCode`<sup>Required</sup> <a name="TraceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode"></a>

```go
func TraceErrorCode() *string
```

- *Type:* *string

---

##### `TraceErrorType`<sup>Required</sup> <a name="TraceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType"></a>

```go
func TraceErrorType() *string
```

- *Type:* *string

---

##### `TraceStatus`<sup>Required</sup> <a name="TraceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus"></a>

```go
func TraceStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpanSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a>

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesList <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpanSummaryServiceSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmTracesTraceSpanSummaryServiceSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get"></a>

```go
func Get(index *f64) DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmtracestrace"

dataociapmtracestrace.NewDataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans">ErrorSpans</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName">SpanServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans">TotalSpans</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorSpans`<sup>Required</sup> <a name="ErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans"></a>

```go
func ErrorSpans() *string
```

- *Type:* *string

---

##### `SpanServiceName`<sup>Required</sup> <a name="SpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName"></a>

```go
func SpanServiceName() *string
```

- *Type:* *string

---

##### `TotalSpans`<sup>Required</sup> <a name="TotalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans"></a>

```go
func TotalSpans() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmTracesTraceSpanSummaryServiceSummaries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a>

---



