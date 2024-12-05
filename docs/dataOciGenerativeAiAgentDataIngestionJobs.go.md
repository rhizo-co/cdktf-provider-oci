# `dataOciGenerativeAiAgentDataIngestionJobs` Submodule <a name="`dataOciGenerativeAiAgentDataIngestionJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataIngestionJobs <a name="DataOciGenerativeAiAgentDataIngestionJobs" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs oci_generative_ai_agent_data_ingestion_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobs(scope Construct, id *string, config DataOciGenerativeAiAgentDataIngestionJobsConfig) DataOciGenerativeAiAgentDataIngestionJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig">DataOciGenerativeAiAgentDataIngestionJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig">DataOciGenerativeAiAgentDataIngestionJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDataSourceId">ResetDataSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDataSourceId` <a name="ResetDataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDataSourceId"></a>

```go
func ResetDataSourceId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiAgentDataIngestionJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiAgentDataIngestionJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataIngestionJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataIngestionJobCollection">DataIngestionJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList">DataOciGenerativeAiAgentDataIngestionJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataIngestionJobCollection`<sup>Required</sup> <a name="DataIngestionJobCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataIngestionJobCollection"></a>

```go
func DataIngestionJobCollection() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filter"></a>

```go
func Filter() DataOciGenerativeAiAgentDataIngestionJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList">DataOciGenerativeAiAgentDataIngestionJobsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataIngestionJobsConfig <a name="DataOciGenerativeAiAgentDataIngestionJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

&dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DataSourceId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#compartment_id DataOciGenerativeAiAgentDataIngestionJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#data_source_id DataOciGenerativeAiAgentDataIngestionJobs#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#display_name DataOciGenerativeAiAgentDataIngestionJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#id DataOciGenerativeAiAgentDataIngestionJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#state DataOciGenerativeAiAgentDataIngestionJobs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#compartment_id DataOciGenerativeAiAgentDataIngestionJobs#compartment_id}.

---

##### `DataSourceId`<sup>Optional</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#data_source_id DataOciGenerativeAiAgentDataIngestionJobs#data_source_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#display_name DataOciGenerativeAiAgentDataIngestionJobs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#filter DataOciGenerativeAiAgentDataIngestionJobs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#id DataOciGenerativeAiAgentDataIngestionJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#state DataOciGenerativeAiAgentDataIngestionJobs#state}.

---

### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

&dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection {

}
```


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

&dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems {

}
```


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

&dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics {

}
```


### DataOciGenerativeAiAgentDataIngestionJobsFilter <a name="DataOciGenerativeAiAgentDataIngestionJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

&dataocigenerativeaiagentdataingestionjobs.DataOciGenerativeAiAgentDataIngestionJobsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#name DataOciGenerativeAiAgentDataIngestionJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#values DataOciGenerativeAiAgentDataIngestionJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#regex DataOciGenerativeAiAgentDataIngestionJobs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#name DataOciGenerativeAiAgentDataIngestionJobs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#values DataOciGenerativeAiAgentDataIngestionJobs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#regex DataOciGenerativeAiAgentDataIngestionJobs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles">NumberOfFailedFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles">NumberOfIngestedFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.durationInSeconds"></a>

```go
func DurationInSeconds() *f64
```

- *Type:* *f64

---

##### `NumberOfFailedFiles`<sup>Required</sup> <a name="NumberOfFailedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles"></a>

```go
func NumberOfFailedFiles() *f64
```

- *Type:* *f64

---

##### `NumberOfIngestedFiles`<sup>Required</sup> <a name="NumberOfIngestedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles"></a>

```go
func NumberOfIngestedFiles() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataIngestionJobStatistics">DataIngestionJobStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataIngestionJobStatistics`<sup>Required</sup> <a name="DataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataIngestionJobStatistics"></a>

```go
func DataIngestionJobStatistics() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsFilterList <a name="DataOciGenerativeAiAgentDataIngestionJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataIngestionJobsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdataingestionjobs"

dataocigenerativeaiagentdataingestionjobs.NewDataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



