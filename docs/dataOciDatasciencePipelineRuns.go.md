# `dataOciDatasciencePipelineRuns` Submodule <a name="`dataOciDatasciencePipelineRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatasciencePipelineRuns <a name="DataOciDatasciencePipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs oci_datascience_pipeline_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRuns(scope Construct, id *string, config DataOciDatasciencePipelineRunsConfig) DataOciDatasciencePipelineRuns
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig">DataOciDatasciencePipelineRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig">DataOciDatasciencePipelineRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId">ResetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId"></a>

```go
func ResetId()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId"></a>

```go
func ResetPipelineId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.DataOciDatasciencePipelineRuns_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.DataOciDatasciencePipelineRuns_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.DataOciDatasciencePipelineRuns_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.DataOciDatasciencePipelineRuns_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatasciencePipelineRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatasciencePipelineRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatasciencePipelineRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns">PipelineRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter"></a>

```go
func Filter() DataOciDatasciencePipelineRunsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a>

---

##### `PipelineRuns`<sup>Required</sup> <a name="PipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns"></a>

```go
func PipelineRuns() DataOciDatasciencePipelineRunsPipelineRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatasciencePipelineRunsConfig <a name="DataOciDatasciencePipelineRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CreatedBy: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	PipelineId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

### DataOciDatasciencePipelineRunsFilter <a name="DataOciDatasciencePipelineRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}.

---

### DataOciDatasciencePipelineRunsPipelineRuns <a name="DataOciDatasciencePipelineRunsPipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRuns {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsLogDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails {

}
```


### DataOciDatasciencePipelineRunsPipelineRunsStepRuns <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

&dataocidatasciencepipelineruns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatasciencePipelineRunsFilterList <a name="DataOciDatasciencePipelineRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatasciencePipelineRunsFilterOutputReference <a name="DataOciDatasciencePipelineRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```go
func EnableAutoLogCreation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```go
func EnableLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsLogDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails">ConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails">LogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails">LogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails">StepOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns">StepRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails"></a>

```go
func ConfigurationDetails() DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a>

---

##### `ConfigurationOverrideDetails`<sup>Required</sup> <a name="ConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails"></a>

```go
func ConfigurationOverrideDetails() DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeleteRelatedJobRuns`<sup>Required</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns"></a>

```go
func DeleteRelatedJobRuns() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LogConfigurationOverrideDetails`<sup>Required</sup> <a name="LogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails"></a>

```go
func LogConfigurationOverrideDetails() DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a>

---

##### `LogDetails`<sup>Required</sup> <a name="LogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails"></a>

```go
func LogDetails() DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a>

---

##### `OpcParentRptUrl`<sup>Required</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl"></a>

```go
func OpcParentRptUrl() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StepOverrideDetails`<sup>Required</sup> <a name="StepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails"></a>

```go
func StepOverrideDetails() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a>

---

##### `StepRuns`<sup>Required</sup> <a name="StepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns"></a>

```go
func StepRuns() DataOciDatasciencePipelineRunsPipelineRunsStepRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails">StepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">StepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepConfigurationDetails`<sup>Required</sup> <a name="StepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```go
func StepConfigurationDetails() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a>

---

##### `StepContainerConfigurationDetails`<sup>Required</sup> <a name="StepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```go
func StepContainerConfigurationDetails() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">Cmd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```go
func Cmd() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```go
func ImageSignatureId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepRunsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepRunsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get"></a>

```go
func Get(index *f64) DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencepipelineruns"

dataocidatasciencepipelineruns.NewDataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId">JobRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType">StepType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobRunId`<sup>Required</sup> <a name="JobRunId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId"></a>

```go
func JobRunId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType"></a>

```go
func StepType() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatasciencePipelineRunsPipelineRunsStepRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a>

---



