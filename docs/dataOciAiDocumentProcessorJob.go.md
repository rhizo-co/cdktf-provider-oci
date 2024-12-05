# `dataOciAiDocumentProcessorJob` Submodule <a name="`dataOciAiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiDocumentProcessorJob <a name="DataOciAiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJob(scope Construct, id *string, config DataOciAiDocumentProcessorJobConfig) DataOciAiDocumentProcessorJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig">DataOciAiDocumentProcessorJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig">DataOciAiDocumentProcessorJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAiDocumentProcessorJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.inputLocation">InputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList">DataOciAiDocumentProcessorJobInputLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.outputLocation">OutputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList">DataOciAiDocumentProcessorJobOutputLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.percentComplete">PercentComplete</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorConfig">ProcessorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList">DataOciAiDocumentProcessorJobProcessorConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobIdInput">ProcessorJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobId">ProcessorJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.inputLocation"></a>

```go
func InputLocation() DataOciAiDocumentProcessorJobInputLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList">DataOciAiDocumentProcessorJobInputLocationList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.outputLocation"></a>

```go
func OutputLocation() DataOciAiDocumentProcessorJobOutputLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList">DataOciAiDocumentProcessorJobOutputLocationList</a>

---

##### `PercentComplete`<sup>Required</sup> <a name="PercentComplete" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.percentComplete"></a>

```go
func PercentComplete() *f64
```

- *Type:* *f64

---

##### `ProcessorConfig`<sup>Required</sup> <a name="ProcessorConfig" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorConfig"></a>

```go
func ProcessorConfig() DataOciAiDocumentProcessorJobProcessorConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList">DataOciAiDocumentProcessorJobProcessorConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `ProcessorJobIdInput`<sup>Optional</sup> <a name="ProcessorJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobIdInput"></a>

```go
func ProcessorJobIdInput() *string
```

- *Type:* *string

---

##### `ProcessorJobId`<sup>Required</sup> <a name="ProcessorJobId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobId"></a>

```go
func ProcessorJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiDocumentProcessorJobConfig <a name="DataOciAiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProcessorJobId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.processorJobId">ProcessorJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProcessorJobId`<sup>Required</sup> <a name="ProcessorJobId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.processorJobId"></a>

```go
ProcessorJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}.

---

### DataOciAiDocumentProcessorJobInputLocation <a name="DataOciAiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobInputLocation {

}
```


### DataOciAiDocumentProcessorJobInputLocationObjectLocations <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobInputLocationObjectLocations {

}
```


### DataOciAiDocumentProcessorJobOutputLocation <a name="DataOciAiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobOutputLocation {

}
```


### DataOciAiDocumentProcessorJobProcessorConfig <a name="DataOciAiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobProcessorConfig {

}
```


### DataOciAiDocumentProcessorJobProcessorConfigFeatures <a name="DataOciAiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

&dataociaidocumentprocessorjob.DataOciAiDocumentProcessorJobProcessorConfigFeatures {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiDocumentProcessorJobInputLocationList <a name="DataOciAiDocumentProcessorJobInputLocationList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobInputLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiDocumentProcessorJobInputLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get"></a>

```go
func Get(index *f64) DataOciAiDocumentProcessorJobInputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiDocumentProcessorJobInputLocationObjectLocationsList <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobInputLocationObjectLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiDocumentProcessorJobInputLocationObjectLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```go
func Get(index *f64) DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations">DataOciAiDocumentProcessorJobInputLocationObjectLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiDocumentProcessorJobInputLocationObjectLocations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations">DataOciAiDocumentProcessorJobInputLocationObjectLocations</a>

---


### DataOciAiDocumentProcessorJobInputLocationOutputReference <a name="DataOciAiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobInputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiDocumentProcessorJobInputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList">DataOciAiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation">DataOciAiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```go
func ObjectLocations() DataOciAiDocumentProcessorJobInputLocationObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList">DataOciAiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation">DataOciAiDocumentProcessorJobInputLocation</a>

---


### DataOciAiDocumentProcessorJobOutputLocationList <a name="DataOciAiDocumentProcessorJobOutputLocationList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobOutputLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiDocumentProcessorJobOutputLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get"></a>

```go
func Get(index *f64) DataOciAiDocumentProcessorJobOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiDocumentProcessorJobOutputLocationOutputReference <a name="DataOciAiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiDocumentProcessorJobOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation">DataOciAiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation">DataOciAiDocumentProcessorJobOutputLocation</a>

---


### DataOciAiDocumentProcessorJobProcessorConfigFeaturesList <a name="DataOciAiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobProcessorConfigFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiDocumentProcessorJobProcessorConfigFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```go
func Get(index *f64) DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">FeatureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">GenerateSearchablePdf</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">MaxResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures">DataOciAiDocumentProcessorJobProcessorConfigFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```go
func FeatureType() *string
```

- *Type:* *string

---

##### `GenerateSearchablePdf`<sup>Required</sup> <a name="GenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```go
func GenerateSearchablePdf() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```go
func MaxResults() *f64
```

- *Type:* *f64

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiDocumentProcessorJobProcessorConfigFeatures
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures">DataOciAiDocumentProcessorJobProcessorConfigFeatures</a>

---


### DataOciAiDocumentProcessorJobProcessorConfigList <a name="DataOciAiDocumentProcessorJobProcessorConfigList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobProcessorConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiDocumentProcessorJobProcessorConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get"></a>

```go
func Get(index *f64) DataOciAiDocumentProcessorJobProcessorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiDocumentProcessorJobProcessorConfigOutputReference <a name="DataOciAiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaidocumentprocessorjob"

dataociaidocumentprocessorjob.NewDataOciAiDocumentProcessorJobProcessorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiDocumentProcessorJobProcessorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">DocumentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.features">Features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList">DataOciAiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">IsZipOutputEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">ProcessorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig">DataOciAiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```go
func DocumentType() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```go
func Features() DataOciAiDocumentProcessorJobProcessorConfigFeaturesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList">DataOciAiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `IsZipOutputEnabled`<sup>Required</sup> <a name="IsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```go
func IsZipOutputEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```go
func ProcessorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig">DataOciAiDocumentProcessorJobProcessorConfig</a>

---



