# `dataOciDatascienceJobs` Submodule <a name="`dataOciDatascienceJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceJobs <a name="DataOciDatascienceJobs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs oci_datascience_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobs(scope Construct, id *string, config DataOciDatascienceJobsConfig) DataOciDatascienceJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig">DataOciDatascienceJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig">DataOciDatascienceJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.DataOciDatascienceJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.DataOciDatascienceJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.DataOciDatascienceJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.DataOciDatascienceJobs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatascienceJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatascienceJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatascienceJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList">DataOciDatascienceJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.jobs">Jobs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList">DataOciDatascienceJobsJobsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.filter"></a>

```go
func Filter() DataOciDatascienceJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList">DataOciDatascienceJobsFilterList</a>

---

##### `Jobs`<sup>Required</sup> <a name="Jobs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.jobs"></a>

```go
func Jobs() DataOciDatascienceJobsJobsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList">DataOciDatascienceJobsJobsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceJobsConfig <a name="DataOciDatascienceJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsConfig {
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
	ProjectId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#compartment_id DataOciDatascienceJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#created_by DataOciDatascienceJobs#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#display_name DataOciDatascienceJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#id DataOciDatascienceJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#project_id DataOciDatascienceJobs#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#state DataOciDatascienceJobs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#compartment_id DataOciDatascienceJobs#compartment_id}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#created_by DataOciDatascienceJobs#created_by}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#display_name DataOciDatascienceJobs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#filter DataOciDatascienceJobs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#id DataOciDatascienceJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#project_id DataOciDatascienceJobs#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#state DataOciDatascienceJobs#state}.

---

### DataOciDatascienceJobsFilter <a name="DataOciDatascienceJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#name DataOciDatascienceJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#values DataOciDatascienceJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#regex DataOciDatascienceJobs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#name DataOciDatascienceJobs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#values DataOciDatascienceJobs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_jobs#regex DataOciDatascienceJobs#regex}.

---

### DataOciDatascienceJobsJobs <a name="DataOciDatascienceJobsJobs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobs {

}
```


### DataOciDatascienceJobsJobsJobConfigurationDetails <a name="DataOciDatascienceJobsJobsJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobConfigurationDetails {

}
```


### DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails <a name="DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails {

}
```


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails {

}
```


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails {

}
```


### DataOciDatascienceJobsJobsJobLogConfigurationDetails <a name="DataOciDatascienceJobsJobsJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobLogConfigurationDetails {

}
```


### DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

&dataocidatasciencejobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceJobsFilterList <a name="DataOciDatascienceJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceJobsFilterOutputReference <a name="DataOciDatascienceJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceJobsJobsJobConfigurationDetailsList <a name="DataOciDatascienceJobsJobsJobConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference <a name="DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.jobType">JobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetails">DataOciDatascienceJobsJobsJobConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.jobType"></a>

```go
func JobType() *string
```

- *Type:* *string

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetails">DataOciDatascienceJobsJobsJobConfigurationDetails</a>

---


### DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList <a name="DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference <a name="DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.cmd">Cmd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType">JobEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails">DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```go
func Cmd() *[]*string
```

- *Type:* *[]*string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```go
func ImageSignatureId() *string
```

- *Type:* *string

---

##### `JobEnvironmentType`<sup>Required</sup> <a name="JobEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType"></a>

```go
func JobEnvironmentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails">DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails</a>

---


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference <a name="DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">JobInfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">JobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `JobInfrastructureType`<sup>Required</sup> <a name="JobInfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```go
func JobInfrastructureType() *string
```

- *Type:* *string

---

##### `JobShapeConfigDetails`<sup>Required</sup> <a name="JobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```go
func JobShapeConfigDetails() DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails</a>

---


### DataOciDatascienceJobsJobsJobLogConfigurationDetailsList <a name="DataOciDatascienceJobsJobsJobLogConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobLogConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobLogConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference <a name="DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetails">DataOciDatascienceJobsJobsJobLogConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```go
func EnableAutoLogCreation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```go
func EnableLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetails">DataOciDatascienceJobsJobsJobLogConfigurationDetails</a>

---


### DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">ExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```go
func DestinationDirectoryName() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```go
func ExportId() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceJobsJobsList <a name="DataOciDatascienceJobsJobsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceJobsJobsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceJobsJobsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceJobsJobsOutputReference <a name="DataOciDatascienceJobsJobsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencejobs"

dataocidatasciencejobs.NewDataOciDatascienceJobsJobsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceJobsJobsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentLength">ArtifactContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentMd5">ArtifactContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactLastModified">ArtifactLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.emptyArtifact">EmptyArtifact</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobArtifact">JobArtifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobConfigurationDetails">JobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList">DataOciDatascienceJobsJobsJobConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobEnvironmentConfigurationDetails">JobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList">DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobInfrastructureConfigurationDetails">JobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobLogConfigurationDetails">JobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList">DataOciDatascienceJobsJobsJobLogConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobStorageMountConfigurationDetailsList">JobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobs">DataOciDatascienceJobsJobs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactContentDisposition`<sup>Required</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentDisposition"></a>

```go
func ArtifactContentDisposition() *string
```

- *Type:* *string

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentLength"></a>

```go
func ArtifactContentLength() *string
```

- *Type:* *string

---

##### `ArtifactContentMd5`<sup>Required</sup> <a name="ArtifactContentMd5" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactContentMd5"></a>

```go
func ArtifactContentMd5() *string
```

- *Type:* *string

---

##### `ArtifactLastModified`<sup>Required</sup> <a name="ArtifactLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.artifactLastModified"></a>

```go
func ArtifactLastModified() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeleteRelatedJobRuns`<sup>Required</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.deleteRelatedJobRuns"></a>

```go
func DeleteRelatedJobRuns() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EmptyArtifact`<sup>Required</sup> <a name="EmptyArtifact" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.emptyArtifact"></a>

```go
func EmptyArtifact() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobArtifact`<sup>Required</sup> <a name="JobArtifact" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobArtifact"></a>

```go
func JobArtifact() *string
```

- *Type:* *string

---

##### `JobConfigurationDetails`<sup>Required</sup> <a name="JobConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobConfigurationDetails"></a>

```go
func JobConfigurationDetails() DataOciDatascienceJobsJobsJobConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobConfigurationDetailsList">DataOciDatascienceJobsJobsJobConfigurationDetailsList</a>

---

##### `JobEnvironmentConfigurationDetails`<sup>Required</sup> <a name="JobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobEnvironmentConfigurationDetails"></a>

```go
func JobEnvironmentConfigurationDetails() DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList">DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList</a>

---

##### `JobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="JobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobInfrastructureConfigurationDetails"></a>

```go
func JobInfrastructureConfigurationDetails() DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList</a>

---

##### `JobLogConfigurationDetails`<sup>Required</sup> <a name="JobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobLogConfigurationDetails"></a>

```go
func JobLogConfigurationDetails() DataOciDatascienceJobsJobsJobLogConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobLogConfigurationDetailsList">DataOciDatascienceJobsJobsJobLogConfigurationDetailsList</a>

---

##### `JobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="JobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.jobStorageMountConfigurationDetailsList"></a>

```go
func JobStorageMountConfigurationDetailsList() DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceJobsJobs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobs.DataOciDatascienceJobsJobs">DataOciDatascienceJobsJobs</a>

---



